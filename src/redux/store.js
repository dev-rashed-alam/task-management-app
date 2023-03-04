import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './member/memberSlice';

export default configureStore({
  reducer: {
    member: memberReducer
  }
});
