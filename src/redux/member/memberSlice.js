/**
 *  This redux-toolkit slice creates a memberSlice using createSlice function,
 *  which takes an object with the following properties:
 *  name: a string that identifies the slice.
 *  initialState: the initial state value of the slice.
 *  reducers: an object with keys representing action names and values as reducer functions
 *  that update the state. In this case, the memberReducers object
 *  contains reducer functions for 'saveAllMembers' and 'removeMember' actions.
 * */
import { createSlice } from '@reduxjs/toolkit';
import { memberReducers } from './memberReducers';
import { useSelector } from 'react-redux';

const initialState = {
  members: []
};

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: memberReducers
});

/** This code exports the 'saveAllMembers' and 'removeMember' action creators,
 * which can be used to dispatch the corresponding actions, and the 'useMembers' hook,
 * which returns the members state object.
 * */
export const { saveAllMembers, removeMember } = memberSlice.actions;

export const useMembers = () => useSelector((state) => state.member);

export default memberSlice.reducer;
