/**
 * This redux-toolkit slice creates a loaderSlice using createSlice function,
 * which takes an object with the following properties:
 * name: a string that identifies the slice.
 * initialState: the initial state value of the slice.
 * reducers: an object with keys representing action names and values as reducer functions that update the state.
 * In this case, the 'openLoader' and 'closeLoader' functions update the loader state to true and false respectively.
 */
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
const initialState = false;

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    openLoader: () => true,
    closeLoader: () => false
  }
});

/**
 *  This code exports the 'openLoader' and 'closeLoader' action creators,
 *  which can be used to dispatch the corresponding actions, and the 'useLoader' hook,
 *  which returns the loader state value.
 *  */
export const { openLoader, closeLoader } = loaderSlice.actions;

export const useLoader = () => useSelector((state) => state.loader);

export default loaderSlice.reducer;
