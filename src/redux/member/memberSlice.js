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

export const { saveAllMembers, removeMember } = memberSlice.actions;

export const useMembers = () => useSelector((state) => state.member);

export default memberSlice.reducer;
