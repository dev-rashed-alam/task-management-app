export const taskReducers = {
  saveAllTasks: (state, action) => {
    return {
      ...state,
      tasks: action.payload
    };
  },
  removeTask: (state, action) => {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload)
    };
  }
};
