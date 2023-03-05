/**
 *  This code creates a taskSlice using createSlice function,
 *  which takes an object with the following properties:
 *  name: a string that identifies the slice.
 *  initialState: the initial state value of the slice.
 *  reducers: an object with keys representing action names and values as reducer functions
 *  that update the state. In this case, the taskReducers object
 *  contains reducer functions for 'saveAllTasks' and 'removeTask' actions.
 * */
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

/** This code exports the 'saveAllTasks' and 'removeTask' action creators,
 *  which can be used to dispatch the corresponding actions, and the 'useTasks' hook,
 *  which returns the tasks state object.
 * */
export const { saveAllTasks, removeTask } = taskSlice.actions;

export const useTasks = () => useSelector((state) => state.task);

export default taskSlice.reducer;
