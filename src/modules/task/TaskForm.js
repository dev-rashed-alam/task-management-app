import React, { useEffect, useState } from 'react';
import EditorComponent from '../../common/EditorComponent';
import Select from 'react-select';
import '../../assets/styles/Form.css';
import { fetchAllMembers, fetchMemberById, updateMemberById } from '../../services/memberService';
import { useDispatch } from 'react-redux';
import { closeLoader, openLoader } from '../../redux/loader/loaderSlice';
import { addNewTask, fetchTaskById, updateTaskById } from '../../services/taskService';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { getUniqueDataSet } from '../../helpers/helpers';

/**
 * The TaskForm component to be displayed when the "/tasks/new" or "/tasks/:id path is accessed.
 *
 * @component
 * @returns {JSX.Element}
 */
const TaskForm = () => {
  const [inputData, setInputData] = useState({});
  const [prevAssignedUser, setPrevAssignedUser] = useState({});
  const [userList, setUserList] = useState([]);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(openLoader());
    if (id) {
      fetchTaskById(id)
        .then((task) => {
          setInputData({
            title: task.title,
            description: task.description,
            user: task.assignTo
          });
          setPrevAssignedUser(task.assignTo);
        })
        .finally(() => dispatch(closeLoader()));
    }
  }, [id]);

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
      title: inputData.title,
      description: inputData.description,
      assignTo: inputData.user
    };
    if (!id) {
      postData.createdAt = Date.now();
    }
    const task = id ? await updateTaskById(id, postData) : await addNewTask(postData);
    if (task) {
      /**
       * Responsible for if assign to is selected and if there is no previous assigned user or previous assigned user and current selected user is not matched
       */
      if (inputData.user?.value && prevAssignedUser?.value !== inputData.user?.value) {
        const userData = await fetchMemberById(inputData.user.value);
        userData.tasks = [...userData.tasks, task];
        await updateMemberById(userData.id, {
          ...userData,
          tasks: getUniqueDataSet(userData.tasks, 'id')
        });
      }

      /**
       * Responsible for removing task from previous assigned user if previous assigned user and current selected user is not matched
       */
      if (prevAssignedUser?.value && prevAssignedUser.value !== inputData.user?.value) {
        const userData = await fetchMemberById(prevAssignedUser.value);
        let newTasks = userData.tasks.filter((item) => parseInt(item.id) !== parseInt(task.id));
        await updateMemberById(prevAssignedUser.value, {
          ...userData,
          tasks: getUniqueDataSet(newTasks, 'id')
        });
      }
      navigator('/tasks');
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
