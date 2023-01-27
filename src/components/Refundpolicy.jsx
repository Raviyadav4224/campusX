import React, { useEffect } from "react";
import data from "../assets/termsofuse.json";

const Refundpolicy = ({isDarkMode}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div
      className={`${isDarkMode ? "hero-colorMode" : ""}`}
      style={{ backgroundColor: "#9246fc", padding: "6rem" }}
    >
      <h1>Refund Policy</h1>
      <p style={{ fontSize: "20px" }}>{data.refundPolicy}</p>
    </div>
  );
};

export default Refundpolicy;
