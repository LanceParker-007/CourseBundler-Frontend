import { configureStore } from '@reduxjs/toolkit';
import { userReducer, profileReducer } from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});

export default store;

export const server = 'https://coursebundler-backend-bn7f.onrender.com/api/v1';
