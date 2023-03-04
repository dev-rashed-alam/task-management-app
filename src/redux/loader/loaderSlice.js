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

export const { openLoader, closeLoader } = loaderSlice.actions;
export const useLoader = () => useSelector((state) => state.loader);

export default loaderSlice.reducer;
