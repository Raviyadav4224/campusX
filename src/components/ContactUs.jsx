import React, { useState } from "react";
import { useEffect } from "react";
import "./ContactUs.scss";
const ContactUs = ({ isAuthenticated,isDarkMode }) => {
  document.title = "Contact Us";

  const [userDetails, setUserDetails] = useState({
    username: "",
    useremail: "",
    usermessage: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserDetails((values) => ({ ...values, [name]: value }));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (
      userDetails.username === "" &&
      userDetails.useremail === "" &&
      userDetails.usermessage === ""
    ) {
      alert("Form cannot be empty");
    } else {
      event.target.reset();
      alert("Thanks for submitting");
    }
  };
  useEffect(()=>{
    window.scrollTo(0,0)

  })
  return (
    <>
      <div className={`contactUs ${isDarkMode?'hero-colorMode':''}`}>
        <h1>Feel Free To Contact Us</h1>

        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="useremail"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Mobile"
              name="useremail"
              onChange={handleChange}
            />
            <textarea
              type="text"
              rows="10"
              cols="33"
              name="usermessage"
              placeholder="Message"
              onChange={handleChange}
            />
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactUs;
