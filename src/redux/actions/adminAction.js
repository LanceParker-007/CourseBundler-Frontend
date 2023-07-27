import axios from 'axios';
import { server } from '../store';

//Create course
export const createCourse = formData => async dispatch => {
  try {
    dispatch({ type: 'createCourseRequest' });

    //title, description, category and createdBy in formData
    const { data } = await axios.post(`${server}/createcourse`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    dispatch({ type: 'createCourseSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'createCourseFail',
      payload: error.response.data.message,
    });
  }
};

//Delete course
export const deleteCourse = id => async dispatch => {
  try {
    dispatch({ type: 'deleteCourseRequest' });

    const { data } = await axios.delete(`${server}/course/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: 'deleteCourseSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteCourseFail',
      payload: error.response.data.message,
    });
  }
};
