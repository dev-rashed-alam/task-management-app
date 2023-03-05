/**
 * This code exports a Redux store created using configureStore,
 * which takes an object with the following properties:
 * reducer: an object with keys representing slice names and values as corresponding reducer functions.
 * In this case, it includes member, task, and loader reducers that handle updates to the state.
 **/
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
