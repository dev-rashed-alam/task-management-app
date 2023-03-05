import React, { useState } from 'react';
import '../../assets/styles/Login.css';
import { doLogin, setLocalStorage } from '../../services/loginService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { closeLoader, openLoader } from '../../redux/loader/loaderSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [inputData, setInputData] = useState({});
  const [errors, setErrors] = useState({});
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInvalidCredential = (data) => {
    setInputData((prev) => ({ ...prev, password: '' }));
    toast.error(data.errors.message);
  };

  const isValidForm = () => {
    const errorsObj = {};
    if (!inputData.username) {
      errorsObj['username'] = 'User name is required';
    }
    if (!inputData.password) {
      errorsObj['password'] = 'Password is required';
    }
    setErrors(errorsObj);
    return Object.keys(errorsObj).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidForm()) return;
    dispatch(openLoader());
    const data = await doLogin(inputData, handleInvalidCredential);
    dispatch(closeLoader());
    if (data) {
      toast.success('Login successful!');
      await setLocalStorage(data);
      navigator('/dashboard');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label htmlFor="username">
              Username <span className="star">*</span>
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter username"
              value={inputData.username || ''}
              name="username"
              onChange={handleInputChange}
            />
            <p className="field-error">{errors.username}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              Password <span className="star">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={inputData.password || ''}
              name="password"
              onChange={handleInputChange}
            />
            <p className="field-error">{errors.password}</p>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
