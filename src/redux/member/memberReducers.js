export const memberReducers = {
  saveAllMembers: (state, action) => {
    return {
      ...state,
      members: action.payload
    };
  }
};
