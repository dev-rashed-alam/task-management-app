import React from 'react';
import '../../assets/styles/Dashboard.css';
import { FaTasks } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';

const Dashboard = () => {
  return (
    <section className="dashboard-buttons">
      <ul className="tile-button">
        <li>
          <div className="button-content">
            <FaTasks />
            <br />
            Tasks
          </div>
        </li>
        <li>
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
