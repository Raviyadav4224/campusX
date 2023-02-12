import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaUserCircle } from "react-icons/fa";
import "./Header.scss";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Container, Navbar, Nav } from "react-bootstrap";
import CustomModal from "./CustomModal";
const Header = ({
  isAuthenticated,
  show,
  toggleModal,
  setDarkMode,
  isDarkMode,
  loading,
}) => {
  const handleShow = () => toggleModal();
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        className={`${isDarkMode ? "navbar-colorMode" : ""}`}
        sticky="top"
      >
        <Container>
          <Link to="/" className="navbar-brand">
            <img className="logo" src={logo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/courses" className="nav-link">
                Courses
              </Link>
              <Link to="/needhelp" className="nav-link">
                Need help?
              </Link>
            </Nav>
            <Nav>
              <Link className="" onClick={setDarkMode}>
                {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
              </Link>
              <Link className="nav-link" onClick={handleShow}>
                Sign In
              </Link>

              {isAuthenticated ? (
                <FaUserCircle onClick={() => navigate("/me")} />
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CustomModal show={show} onHide={toggleModal} loading={loading} />
    </>
  );
};

export default Header;
