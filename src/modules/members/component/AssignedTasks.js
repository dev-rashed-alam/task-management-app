import React from 'react';
import { changeDate } from '../../../helpers/helpers';

const AssignedTasks = ({ tasks }) => {
  const renderTasks = () => {
    return tasks?.map((task) => {
      return (
        <tr className="crud-table__row" key={`task_${task.id}`}>
          <td className="crud-table__cell">{task.title}</td>
          <td className="crud-table__cell" dangerouslySetInnerHTML={{ __html: task.description }} />
          <td className="crud-table__cell">{changeDate(task.createdAt)}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="page-heading mb-2">
        <div className="title">
          <h4>Assigned task list</h4>
        </div>
      </div>
      <table className="crud-table">
        <thead className="crud-table__header">
          <tr className="crud-table__row">
            <th className="crud-table__header-cell">Task title</th>
            <th className="crud-table__header-cell">Description</th>
            <th className="crud-table__header-cell">Creation date</th>
          </tr>
        </thead>
        <tbody className="crud-table__body">{renderTasks()}</tbody>
      </table>
    </>
  );
};

export default AssignedTasks;
