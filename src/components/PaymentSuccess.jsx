import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import "./paymentSuccess.scss";
import success from '../assets/successTick.png'
const PaymentSuccess = ({ loading,isDarkMode }) => {
  const navigate = useNavigate();
const {reference}=useParams()
  return (
    <div className={`paymentPage ${isDarkMode ? "topCourses-colorMode" : ""}`}>
      <div className="buyNow">
        <h1>Payment Success</h1>
        <div className="courseName" style={{display:"flex",flexDirection:"column"}}>
          <img src={success} alt="" />
          <span>reference</span>
          {/* <span>₹ {courseInfo.price}</span> */}
        <div className="paymentSuccess">
          <button 
        //   onClick={() => buySubscription()}
          >
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
              "Go To Course"
            )}
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
