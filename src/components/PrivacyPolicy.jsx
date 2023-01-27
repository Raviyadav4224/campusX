import React, { useEffect } from "react";
import data from "../assets/termsofuse.json";

const PrivacyPolicy = ({isDarkMode}) => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <div
    className={`${isDarkMode?'hero-colorMode':''}`}
      style={{ backgroundColor: "#9246fc", padding: "6rem" }}
      id="privacyPolicy"
    >
      <h1>Privacy Policy</h1>
      <p style={{ fontSize: "20px" }}>{data.privacyPolicy}</p>
    </div>
  );
};

export default PrivacyPolicy;
