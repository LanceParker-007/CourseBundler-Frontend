import { createReducer } from '@reduxjs/toolkit';

export const adminReducer = createReducer(
  {},
  {
    //Create Course
    createCourseRequest: state => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Create Course
    deleteCourseRequest: state => {
      state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Clear Message and Error
    clearMessage: state => {
      state.message = null;
    },
    clearError: state => {
      state.error = null;
    },
  }
);
