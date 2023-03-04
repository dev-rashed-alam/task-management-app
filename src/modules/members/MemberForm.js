import React, { useEffect, useState } from 'react';
import '../../assets/styles/Form.css';
import { addNewMember, fetchMemberById, updateMemberById } from '../../services/memberService';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const MemberForm = () => {
  const [inputData, setInputData] = useState({});
  const [errors, setErrors] = useState({});
  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchMemberById(id).then((data) => {
        setInputData({
          name: data.name,
          email: data.email
        });
      });
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
    const user = id ? await updateMemberById(id, inputData) : await addNewMember(inputData);
    if (user) {
      toast.success(`Member was ${id ? 'updated' : 'created'} successful`);
      navigator('/members');
    }
  };

  return (
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
  );
};

export default MemberForm;
