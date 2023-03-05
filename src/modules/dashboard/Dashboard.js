import React from 'react';
import '../../assets/styles/Dashboard.css';
import { FaTasks } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

/**
 * The Dashboard component to be displayed when the "/dashboard" path is accessed.
 *
 * @component
 * @returns {JSX.Element}
 */
const Dashboard = () => {
  const navigator = useNavigate();

  return (
    <section className="dashboard-buttons">
      <ul className="tile-button">
        <li onClick={() => navigator('/tasks')}>
          <div className="button-content">
            <FaTasks />
            <br />
            Tasks
          </div>
        </li>
        <li onClick={() => navigator('/members')}>
          <div className="button-content">
            <FiUsers />
            <br />
            Members
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Dashboard;
