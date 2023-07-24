import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer(
  {},
  {
    //Login Reducers
    loginRequest: state => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload; //udhar se destructure karke bhejenge
    },

    //Logout Reducers
    logoutRequest: state => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload; //udhar se destructure karke bhejenge
    },

    //Load User Reducers
    loadUserRequest: state => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload; //udhar se destructure karke bhejenge
    },

    //Clear Error and Message Reducers
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
