import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/actions";
import "./Profile.scss";
const Profile = ({isDarkMode,user}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {user && (
        <div className={`profile ${isDarkMode?'hero-colorMode':''}`}>
          <img src={`${user.avatar.url}`} alt="" />
          <h2>{user.name}</h2>
          <h2>{user.role}</h2>
          <h2>{user.email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};

export default Profile;
