import React from "react";
import "./Subscribe.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { buySubscriptionPlan } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import logo from '../assets/logo.jpg'
import {url} from '../redux/actions/actions'
const Payment = ({ user, isDarkMode, courseInfo }) => {
  console.log(courseInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [key, setKey] = useState();
  const buySubscription = async () => {
    const {
      data: { key },
    } = await axios.get(`${url}/razorpaykey`);
    dispatch(buySubscriptionPlan());
    setKey(key);
  };
  const { loading, error, subscriptionId, message } = useSelector(
    (state) => state.subscribe
  );
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch("clearError");
    }
    if (message) {
      toast.success(message);
      dispatch("clearMessage");
    }
    if (subscriptionId) {
      const openPopUp = async () => {
        const razor = new window.Razorpay({
          key,
          name: "campusX",
          image:logo,
          subscription_id: user.subscription.id,
          order_id:"",
          amount: courseInfo.price * 100,
          description: "Get access of this course",
          callback_url: `${url}/paymentVerification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: "",
          },
          notes: {
            address: "CampusX",
          },
          theme: {
            color: "#FFC800",
          },
        });
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    courseInfo.price,
    key,
    subscriptionId,
    user.subscription.id,
    error,
    message,
    user.name,
    user.email,
  ]);
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
          <button onClick={() => buySubscription()}>
            {loading ? (
              <TailSpin
                height="24"
                width="24"
                color="black"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              "Continue To Secure Payment"
            )}
            {/* <span >
              Continue To Secure Payment
            </span> */}
          </button>
          <div onClick={() => navigate("/courses")}>Cancle Payment</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
