import React from 'react';
import '../../assets/styles/Table.css';

const TaskList = () => {
  return (
    <>
      <div className="page-heading mb-2">
        <div className="title">
          <h3>Tasks page</h3>
        </div>
        <div className="button-wrapper">
          <button type="submit" className="btn btn-primary custom-btn">
            Create new task
          </button>
        </div>
      </div>
      <table className="crud-table">
        <thead className="crud-table__header">
          <tr className="crud-table__row">
            <th className="crud-table__header-cell">Title</th>
            <th className="crud-table__header-cell">Description</th>
            <th className="crud-table__header-cell">Assign to</th>
            <th className="crud-table__header-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="crud-table__body">
          <tr className="crud-table__row">
            <td className="crud-table__cell">38700 Werner Groves</td>
            <td className="crud-table__cell">Health orchestrate Kansas</td>
            <td className="crud-table__cell">Rashed</td>
            <td className="crud-table__cell">
              <button className="crud-button crud-button--negative" type="button">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
