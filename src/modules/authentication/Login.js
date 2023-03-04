import React from 'react';
import '../../assets/styles/Login.css';

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
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
              value=""
              name="username"
            />
            <p className="field-error"></p>
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
              name="password"
            />
            <p className="field-error"></p>
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
