import { createSlice } from '@reduxjs/toolkit';
import { taskReducers } from './taskReducer';
import { useSelector } from 'react-redux';

const initialState = {
  tasks: []
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: taskReducers
});

export const { saveAllTasks, removeTask } = taskSlice.actions;

export const useTasks = () => useSelector((state) => state.task);

export default taskSlice.reducer;
