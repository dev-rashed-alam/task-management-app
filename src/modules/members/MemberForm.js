import React from 'react';
import '../../assets/styles/Form.css';

const MemberForm = () => {
  return (
    <div className="form-wrapper">
      <form>
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
            />
            <p className="field-error"></p>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
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
