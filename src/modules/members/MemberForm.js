import React, { useEffect, useState } from 'react';
import '../../assets/styles/Form.css';
import { addNewMember, fetchMemberById, updateMemberById } from '../../services/memberService';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeLoader, openLoader } from '../../redux/loader/loaderSlice';
import AssignedTasks from './component/AssignedTasks';

/**
 * The MemberForm component to be displayed when the "/members/new" or "/members/:id path is accessed.
 *
 * @component
 * @returns {JSX.Element}
 */
const MemberForm = () => {
  const [inputData, setInputData] = useState({});
  const [errors, setErrors] = useState({});
  const [assignedTasks, setAssignedTasks] = useState([]);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(openLoader());
      fetchMemberById(id)
        .then((data) => {
          setInputData({
            name: data.name,
            email: data.email
          });
          if (data.tasks?.length > 0) {
            setAssignedTasks(data.tasks);
          }
        })
        .finally(() => dispatch(closeLoader()));
    }
  }, [id]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidForm = () => {
    const errorObj = {};
    if (!inputData.name) {
      errorObj.name = 'Name is required';
    }
    setErrors(errorObj);
    return Object.keys(errorObj).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidForm()) return;
    dispatch(openLoader());
    const user = id ? await updateMemberById(id, inputData) : await addNewMember(inputData);
    dispatch(closeLoader());
    if (user) {
      toast.success(`Member was ${id ? 'updated' : 'created'} successful`);
      navigator('/members');
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="name">
                Name<span className="star">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={inputData.name || ''}
                onChange={handleInputChange}
              />
              <p className="field-error">{errors.name}</p>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={inputData.email || ''}
                onChange={handleInputChange}
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

      {assignedTasks.length > 0 && (
        <div className="assigned-task">
          <AssignedTasks tasks={assignedTasks} />
        </div>
      )}
    </>
  );
};

export default MemberForm;
