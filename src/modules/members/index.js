import React, { useEffect } from 'react';
import '../../assets/styles/Table.css';
import { Link, useNavigate } from 'react-router-dom';
import { deleteMemberById, fetchAllMembers } from '../../services/memberService';
import { useDispatch } from 'react-redux';
import { removeMember, saveAllMembers, useMembers } from '../../redux/member/memberSlice';
import { closeLoader, openLoader } from '../../redux/loader/loaderSlice';

/**
 * The MemberList component to be displayed when the "/members" path is accessed.
 *
 * @component
 * @returns {JSX.Element}
 */
const MemberList = () => {
  const { members } = useMembers();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openLoader());
    fetchAllMembers()
      .then((data) => {
        dispatch(saveAllMembers(data));
      })
      .finally(() => dispatch(closeLoader()));
  }, []);

  const handleMemberDelete = async (id) => {
    dispatch(openLoader());
    const user = await deleteMemberById(id);
    if (user) {
      dispatch(removeMember(id));
    }
    dispatch(closeLoader());
  };

  const renderMemberList = () => {
    return members?.map((member) => {
      return (
        <tr className="crud-table__row" key={`member_${member.id}`}>
          <td className="crud-table__cell">
            <Link to={`/member/${member.id}`} className="clickable">
              {member.name}
            </Link>
          </td>
          <td className="crud-table__cell">{member.tasks.length}</td>
          <td className="crud-table__cell">
            <button
              className="crud-button crud-button--negative"
              type="button"
              onClick={() => handleMemberDelete(member.id)}>
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
        <tbody className="crud-table__body">
          {renderMemberList()}
          {members.length === 0 && <p className="pt-2 pb-2 text-muted">No member found!</p>}
        </tbody>
      </table>
    </>
  );
};

export default MemberList;
