import React, { useEffect } from 'react';
import '../../assets/styles/Table.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeLoader, openLoader } from '../../redux/loader/loaderSlice';
import { deleteTaskById, fetchAllTasks } from '../../services/taskService';
import { removeTask, saveAllTasks, useTasks } from '../../redux/task/taskSlice';
import { changeDate } from '../../helpers/helpers';
import { removeTaskFromMemberByTaskId } from '../../services/memberService';

/**
 * The TaskList component to be displayed when the "/tasks" path is accessed.
 *
 * @component
 * @returns {JSX.Element}
 */
const TaskList = () => {
  const { tasks } = useTasks();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openLoader());
    fetchAllTasks()
      .then((data) => {
        dispatch(saveAllTasks(data));
      })
      .finally(() => dispatch(closeLoader()));
  }, []);

  const handleTaskDelete = async (id) => {
    dispatch(openLoader());
    const task = await deleteTaskById(id);
    if (task) {
      if (task.assignTo?.value) {
        await removeTaskFromMemberByTaskId(task.id, task.assignTo.value);
      }
      dispatch(removeTask(id));
    }
    dispatch(closeLoader());
  };

  const renderTasks = () => {
    return tasks?.map((task) => {
      return (
        <tr className="crud-table__row" key={`task_${task.id}`}>
          <td className="crud-table__cell">
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </td>
          <td className="crud-table__cell" dangerouslySetInnerHTML={{ __html: task.description }} />
          <td className="crud-table__cell">{changeDate(task.createdAt)}</td>
          <td className="crud-table__cell">{task.assignTo?.label}</td>
          <td className="crud-table__cell">
            <button
              className="crud-button crud-button--negative"
              type="button"
              onClick={() => handleTaskDelete(task.id)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="page-heading mb-2">
        <div className="title">
          <h3>Tasks page</h3>
        </div>
        <div className="button-wrapper">
          <button
            type="submit"
            className="btn btn-primary custom-btn"
            onClick={() => navigator('/tasks/new')}>
            Create new task
          </button>
        </div>
      </div>
      <table className="crud-table">
        <thead className="crud-table__header">
          <tr className="crud-table__row">
            <th className="crud-table__header-cell">Title</th>
            <th className="crud-table__header-cell">Description</th>
            <th className="crud-table__header-cell">Creation date</th>
            <th className="crud-table__header-cell">Assign to</th>
            <th className="crud-table__header-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="crud-table__body">{renderTasks()}</tbody>
      </table>
    </>
  );
};

export default TaskList;
