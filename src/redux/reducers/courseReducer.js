import { createReducer } from '@reduxjs/toolkit';

export const courseReducer = createReducer(
  {},
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
  }
);
