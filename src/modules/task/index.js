import React from 'react';
import '../../assets/styles/Table.css';

const TaskList = () => {
  return (
    <table className="crud-table">
      <thead className="crud-table__header">
        <tr className="crud-table__row">
          <th className="crud-table__header-cell">Id</th>
          <th className="crud-table__header-cell">Title</th>
          <th className="crud-table__header-cell">Description</th>
          <th className="crud-table__header-cell">Actions</th>
        </tr>
      </thead>
      <tbody className="crud-table__body">
        <tr className="crud-table__row">
          <td className="crud-table__cell">
            <div className="crud-table__cell-label">Id</div>
            50
          </td>
          <td className="crud-table__cell">
            <div className="crud-table__cell-label">Title</div>
            38700 Werner Groves
          </td>
          <td className="crud-table__cell">
            <div className="crud-table__cell-label">Description</div>
            Health orchestrate Kansas
          </td>
          <td className="crud-table__cell">
            <div className="crud-table__cell-label">Actions</div>
            <button className="crud-button crud-button--primary" type="button">
              Read
            </button>
            &nbsp;
            <button className="crud-button crud-button--positive" type="button">
              Edit
            </button>
            &nbsp;
            <button className="crud-button crud-button--negative" type="button">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TaskList;
