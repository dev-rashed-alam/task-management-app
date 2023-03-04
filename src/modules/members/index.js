import React, { useEffect } from 'react';
import '../../assets/styles/Table.css';
import { useNavigate } from 'react-router-dom';
import { fetchAllMembers } from '../../services/memberService';

const MemberList = () => {
  const navigator = useNavigate();

  useEffect(() => {
    fetchAllMembers();
  }, []);

  return (
    <>
      <div className="page-heading mb-2">
        <div className="title">
          <h3>Members page</h3>
        </div>
        <div className="button-wrapper">
          <button
            onClick={() => navigator('/members/new')}
            type="submit"
            className="btn btn-primary custom-btn">
            Create new member
          </button>
        </div>
      </div>
      <table className="crud-table">
        <thead className="crud-table__header">
          <tr className="crud-table__row">
            <th className="crud-table__header-cell">Name</th>
            <th className="crud-table__header-cell">Number of assigned tasks</th>
            <th className="crud-table__header-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="crud-table__body">
          <tr className="crud-table__row">
            <td className="crud-table__cell">38700 Werner Groves</td>
            <td className="crud-table__cell">Health orchestrate Kansas</td>
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

export default MemberList;
