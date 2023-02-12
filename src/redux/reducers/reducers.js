import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {},
  {
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logOutRequest: (state) => {
      state.loading = true;
    },
    logOutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.lectures = undefined;
      state.message = action.payload.message;
    },
    logOutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    loginRequest: (state) => {
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
      state.error = action.payload;
    },
    getAllCoursesRequest: (state) => {
      state.loading = true;
    },
    getAllCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    getAllCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAllLecturesRequest: (state) => {
      state.loading = true;
    },
    getAllLecturesSuccess: (state, action) => {
      state.loading = false;
      state.lectures = action.payload.lectures;
    },
    getAllLecturesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAllUsersRequest: (state) => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
    },
    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserRequest: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCourseRequest: (state) => {
      state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteLectureRequest: (state) => {
      state.loading = true;
    },
    deleteLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createCourseRequest: (state) => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addLecturesRequest: (state) => {
      state.loading = true;
    },
    addLecturesSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addLecturesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    courseReviewRequest: (state) => {
      state.loading = true;
    },
    courseReviewSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.reviews = action.payload.reviews;
    },
    courseReviewFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createCourseReviewRequest: (state) => {
      state.loading = true;
    },
    createCourseReviewSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    createCourseReviewFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCourseReviewRequest: (state) => {
      state.loading = true;
    },
    deleteCourseReviewSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteCourseReviewFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  }
);
