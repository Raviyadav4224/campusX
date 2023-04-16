import React from "react";
import "./Payment.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../redux/actions/actions";
import { buySubscription } from "../redux/actions/actions";
const Payment = ({ user, isDarkMode, courseInfo }) => {
  console.log(courseInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buySubscription = () => {
    const openPopUp = async () => {
      const {
        data: { key },
      } = await axios.get(`${url}/razorpaykey`);
      await dispatch(buySubscription())
      const razor = new window.Razorpay({
        key,
        name: "campusX",
        subscription_id: user.subscription.id,
        amount:courseInfo.price*100,
        description: "Get access of Every course",
        callback_url: `${url}/paymentVerification`,
      });
      razor.open()
    };
    openPopUp();
  };
  return (
    <div className={`paymentPage ${isDarkMode ? "topCourses-colorMode" : ""}`}>
      <div className="buyNow">
        <h1>Order Summary</h1>
        <div className="courseName">
          <img src={courseInfo.poster.url} alt="" />
          <span>{courseInfo.title}</span>
          <span>₹ {courseInfo.price}</span>
        </div>
        <div className="buyBtns">
          <button>
            <span onClick={() => buySubscription()}>
              Continue To Secure Payment
            </span>
          </button>
          <div onClick={() => navigate("/courses")}>Cancle Payment</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
