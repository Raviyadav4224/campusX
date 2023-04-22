import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import TermsOfUse from "./components/TermsOfUse";
import ContactUs from "./components/ContactUs";
import CourseDetail from "./components/CourseDetail";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./components/Profile";
import Rough from "./components/Rough";
import "bootstrap/dist/css/bootstrap.min.css";
import Refundpolicy from "./components/Refundpolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Subscribe from "./components/Subscribe";
import PaymentFail from "./components/PaymentFail";
import PaymentSuccess from "./components/PaymentSuccess";
import { loadUser } from "./redux/actions/actions";
// import { loadUser } from "./redux/actions/actions";

const App = () => {
  const {
    isAuthenticated,
    error,
    message,
    courses,
    lectures,
    courseInfo,
    reviews,
    loading,
    user,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleColorMode = () => setDarkMode(!isDarkMode);
  const toggleModal = () => {
    setShow(!show);
  };
  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Header
          isAuthenticated={isAuthenticated}
          toggleModal={toggleModal}
          show={show}
          isDarkMode={isDarkMode}
          setDarkMode={toggleColorMode}
          loading={loading}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                courses={courses}
                isAuthenticated={isAuthenticated}
                toggleModal={toggleModal}
                isDarkMode={isDarkMode}
                reviews={reviews}
              />
            }
          />
          <Route
            path="/courses"
            element={
              <Courses
                isAuthenticated={isAuthenticated}
                isDarkMode={isDarkMode}
                toggleModal={toggleModal}
              />
            }
          />
          <Route
            path="/needhelp"
            element={<ContactUs isDarkMode={isDarkMode} />}
          />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route
            path="/termsofuse"
            element={<TermsOfUse isDarkMode={isDarkMode} />}
          />
          <Route
            path="/refundPolicy"
            element={<Refundpolicy isDarkMode={isDarkMode} />}
          />
          <Route
            path="/privacyPolicy"
            element={<PrivacyPolicy isDarkMode={isDarkMode} />}
          />
          <Route
            path="/courseDetail/:id"
            element={
              <CourseDetail
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
                lectures={lectures}
                courseInfo={courseInfo}
                reviews={reviews}
                toggleModal={toggleModal}
                isDarkMode={isDarkMode}
              />
            }
          />
          <Route
            path="/me"
            element={
              <Profile
                user={user}
                isDarkMode={isDarkMode}
                courses={courses}
                loading={loading}
              />
            }
          />
          <Route path="/rough" element={<Rough />} />
          <Route
            path="/subscribe"
            element={
              <Subscribe
                user={user}
                isDarkMode={isDarkMode}
                courseInfo={courseInfo}
              />
            }
          />
          <Route
            path="/paymentFail"
            element={<PaymentFail isDarkMode={isDarkMode} />}
          />
          <Route
            path="paymentSuccess"
            element={<PaymentSuccess isDarkMode={isDarkMode} />}
          />
        </Routes>
        <Toaster
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 4000,
            },
          }}
        />
        <Footer isDarkMode={isDarkMode} />
      </BrowserRouter>
    </>
  );
};

export default App;
