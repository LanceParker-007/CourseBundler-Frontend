import { configureStore } from '@reduxjs/toolkit';
import { userReducer, profileReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
  },
});

export default store;

export const server = 'https://coursebundler-backend-bn7f.onrender.com/api/v1';
