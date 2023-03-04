import React, { useEffect } from 'react';
import '../../assets/styles/Table.css';
import { useNavigate } from 'react-router-dom';
import { fetchAllMembers } from '../../services/memberService';
import { useDispatch } from 'react-redux';
import { saveAllMembers, useMembers } from '../../redux/member/memberSlice';

const MemberList = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { members } = useMembers();

  useEffect(() => {
    fetchAllMembers().then((data) => {
      dispatch(saveAllMembers(data));
    });
  }, []);

  const renderMemberList = () => {
    return members?.map((member) => {
      return (
        <tr className="crud-table__row" key={`member_${member.id}`}>
          <td className="crud-table__cell">{member.name}</td>
          <td className="crud-table__cell">{member.tasks.length}</td>
          <td className="crud-table__cell">
            <button className="crud-button crud-button--negative" type="button">
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
        <tbody className="crud-table__body">{renderMemberList()}</tbody>
      </table>
    </>
  );
};

export default MemberList;
