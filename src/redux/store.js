import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './member/memberSlice';
import loaderReducer from './loader/loaderSlice';

export default configureStore({
  reducer: {
    member: memberReducer,
    loader: loaderReducer
  }
});
