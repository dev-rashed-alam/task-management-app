import React, { useState } from 'react';
import EditorComponent from '../../common/EditorComponent';
import Select from 'react-select';
import '../../assets/styles/Form.css';

const TaskForm = () => {
  const [inputData, setInputData] = useState({});
  const [userList] = useState([]);
  const [errors, setErrors] = useState({});

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
  };

  const handleUserSelect = () => {};

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
              value={inputData.users || {}}
            />
            <p className="field-error">{errors.permissions}</p>
          </div>
          <div className="mb-3 col-md-12">
            <EditorComponent
              label={'Description'}
              value={inputData.description}
              onChange={(data) => console.log(data)}
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
