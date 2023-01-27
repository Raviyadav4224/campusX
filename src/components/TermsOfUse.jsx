import React from "react";
import { useEffect } from "react";
import data from "../assets/termsofuse.json";
const TermsOfUse = ({ isDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div
      style={{ backgroundColor: "#9246fc", padding: "6rem" }}
      className={`${isDarkMode ? "hero-colorMode" : ""}`}
    >
      <h1>Terms Of Use</h1>
      <p style={{ fontSize: "20px" }}>{data.termsofuse}</p>
    </div>
  );
};

export default TermsOfUse;
