import { createReducer } from '@reduxjs/toolkit';

export const courseReducer = createReducer(
  { courses: [], lectures: [] },
  {
    //All courses request
    allCoursesRequest: state => {
      state.loading = true;
    },
    allCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    allCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Get Courses Lectures for subscribed users only
    getCourseRequest: state => {
      state.loading = true;
    },
    getCourseSuccess: (state, action) => {
      state.loading = false;
      state.lectures = action.payload;
    },
    getCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // courses vali screen pe dikhega, remove from playlist ko profile mein rakhenege kyunki hume vahan toast dikhana hai
    //Add to playlist,
    addToPlaylistRequest: state => {
      state.loading = true;
    },
    addToPlaylistSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addToPlaylistFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Clear message and error
    clearMessage: state => {
      state.message = null;
    },
    clearError: state => {
      state.error = null;
    },
  }
);
