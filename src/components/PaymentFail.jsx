import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
// import "./Subscribe.scss";
import './paymentFail.scss'
import fail from '../assets/failTick.png'
const PaymentSuccess = ({ loading,isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`paymentPage ${isDarkMode ? "topCourses-colorMode" : ""}`}>
      <div className="buyNow">
        <h1>Payment Fail</h1>
        <div className="courseName" style={{display:"flex",flexDirection:"column"}}>
          <img src={fail} alt="" />
        </div>
        <div className="paymentFail">
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
              "Try Again"
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

export default PaymentSuccess;
