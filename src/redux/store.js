import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './member/memberSlice';
import taskReducer from './task/taskSlice';
import loaderReducer from './loader/loaderSlice';

export default configureStore({
  reducer: {
    member: memberReducer,
    task: taskReducer,
    loader: loaderReducer
  }
});
