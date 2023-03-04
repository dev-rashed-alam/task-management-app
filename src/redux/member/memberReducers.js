export const memberReducers = {
  saveAllMembers: (state, action) => {
    return {
      ...state,
      members: action.payload
    };
  },
  removeMember: (state, action) => {
    return {
      ...state,
      members: state.members.filter((member) => member.id !== action.payload)
    };
  }
};
