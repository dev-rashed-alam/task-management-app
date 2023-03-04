import React, { useEffect, useState } from 'react';
import EditorComponent from '../../common/EditorComponent';
import Select from 'react-select';
import '../../assets/styles/Form.css';
import { fetchAllMembers, fetchMemberById, updateMemberById } from '../../services/memberService';
import { useDispatch } from 'react-redux';
import { closeLoader, openLoader } from '../../redux/loader/loaderSlice';
import { addNewTask } from '../../services/taskService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const [inputData, setInputData] = useState({});
  const [userList, setUserList] = useState([]);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    dispatch(openLoader());
    fetchAllMembers()
      .then((data) => {
        let users = data.map((user) => ({ label: user.name, value: user.id }));
        setUserList(users);
      })
      .finally(() => dispatch(closeLoader()));
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidForm = () => {
    const errorObj = {};
    if (!inputData.title) {
      errorObj.title = 'Title is required';
    }
    setErrors(errorObj);
    return Object.keys(errorObj).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidForm()) return;
    dispatch(openLoader());
    const postData = {
      createdAt: Date.now(),
      title: inputData.title,
      description: inputData.description,
      assignTo: inputData.user
    };
    const task = await addNewTask(postData);
    if (task) {
      if (inputData.user?.value) {
        const user = await fetchMemberById(inputData.user.value);
        user.tasks = [...user.tasks, task.id];
        await updateMemberById(user.id, user);
      }
      navigator('/task');
      toast.success(`Task was created successful!`);
    }
    dispatch(closeLoader());
  };

  const handleUserSelect = (user) => {
    setInputData((prev) => ({ ...prev, user: user }));
  };

  const onChangeEditor = (data) => {
    setInputData((prev) => ({ ...prev, description: data }));
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="title">
              Title<span className="star">*</span>
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Enter title"
              name="title"
              value={inputData.title || ''}
              onChange={handleInputChange}
            />
            <p className="field-error">{errors.title}</p>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="assignUser">Assign to</label>
            <Select
              options={userList}
              isMulti={false}
              classNamePrefix="react-select"
              onChange={handleUserSelect}
              value={inputData.user || {}}
            />
            <p className="field-error">{errors.permissions}</p>
          </div>
          <div className="mb-3 col-md-12">
            <EditorComponent
              label={'Description'}
              value={inputData.description}
              onChange={onChangeEditor}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
