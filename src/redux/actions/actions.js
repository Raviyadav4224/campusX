import axios from "axios";
export const url = "http://localhost:3000/campusX/v1";
console.log(url);
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });
    const { data } = await axios.get(`${url}/me`, {
      withCredentials: true,
    });
    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

// export const getGoogleUser = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "loginRequest",
//     });
//     const { data } = await axios.get(
//       `http://localhost:3000/auth/login/success`,
//       {
//         withCredentials: true,
//       }
//     );
//     dispatch({ type: "loginSuccess", payload: data });
//   } catch (error) {
//     dispatch({ type: "loginFail", payload: error.response.data.message });
//   }
// };

export const registerUser = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });
    const { data } = await axios.post(`${url}/register`, myForm, {
      withCredentials: true,
    });
    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.post(
      `${url}/login`,
      { email, password },
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};
export const getAllCourses = (keyword) => async (dispatch) => {
  try {
    if (keyword === undefined) {
      keyword = "";
    }
    dispatch({ type: "getAllCoursesRequest" });
    const { data } = await axios.get(`${url}/courses?keyword=${keyword}`, {
      withCredentials: true,
    });
    dispatch({ type: "getAllCoursesSuccess", payload: data.courses });
  } catch (error) {
    dispatch({
      type: "getAllCoursesFail",
      payload: error.response.data.message,
    });
  }
};

export const createCourse = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: "createCourseRequest" });
    const { data } = await axios.post(`${url}/createCourse`, myForm, {
      withCredentials: true,
    });
    dispatch({ type: "createCourseSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "createCourseFail",
      payload: error.response.data.message,
    });
  }
};
export const addLectures = (id, myForm) => async (dispatch) => {
  try {
    dispatch({ type: "addLecturesRequest" });
    const { data } = await axios.post(`${url}/course/${id}`, myForm, {
      withCredentials: true,
    });
    dispatch({ type: "addLecturesSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "addLecturesFail",
      payload: error.response.data.message,
    });
  }
};
export const deleteLectures = (courseId, lectureId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteLectureRequest" });
    const { data } = await axios.delete(
      `${url}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "deleteLectureSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "deleteLectureFail",
      payload: error.response.data.message,
    });
  }
};
export const getAllLectures = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getAllLecturesRequest" });
    const { data } = await axios.get(`${url}/course/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "getAllLecturesSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllLecturesFail",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logOutRequest" });
    const { data } = await axios.get(`${url}/logout`, {
      withCredentials: true,
    });
    dispatch({ type: "logOutSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "logOutFail", payload: error.response.data.message });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });
    const { data } = await axios.delete(`${url}/admin/user/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "deleteUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "deleteUserFail", payload: error.response.data.message });
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteCourseRequest" });
    const { data } = await axios.delete(`${url}/course/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "deleteCourseSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "deleteCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersRequest" });
    const { data } = await axios.get(`${url}/admin/users`, {
      withCredentials: true,
    });
    dispatch({ type: "getAllUsersSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getAllUsersFail", payload: error.response.data.message });
  }
};

export const getCourseReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: "courseReviewRequest" });
    const { data } = await axios.get(`${url}/courseReviews/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "courseReviewSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "courseReviewFail",
      payload: error.response.data.message,
    });
  }
};

export const createCourseReview = (id, comment, rating) => async (dispatch) => {
  try {
    if (rating === undefined) rating = 5;
    dispatch({ type: "createCourseReviewRequest" });
    const { data } = await axios.post(
      `${url}/courseReviews/${id}`,
      { comment, rating },
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "createCourseReviewSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "createCourseReviewFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteCourseReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteCourseReviewRequest" });
    const { data } = await axios.delete(`${url}/courseReviews/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "deleteCourseReviewSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "deleteCourseReviewFail",
      payload: error.response.data.message,
    });
  }
};

export const getCourseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getCourseDetailsRequest" });
    const { data } = await axios.get(`${url}/courseDetails/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "getCourseDetailsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getCourseDetailsFail",
      payload: error.response.data.message,
    });
  }
};

export const buySubscriptionPlan = () => async (dispatch) => {
  try {
    dispatch({ type: "buySubscriptionRequest" });
    const { data } = await axios.get(`${url}/subscribe`, {
      withCredentials: true,
    });
    dispatch({ type: "buySubscriptionSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "buySubscriptionFail",
      payload: error.response.data.message,
    });
  }
};
