import React from "react";
import { Modal } from "react-bootstrap";
import "./CustomModal.scss";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const CustomModal = ({ onHide, show,loading }) => {
  const toggleForm = () => {
    setForm(form === "login" ? "register" : "login");
  };
  const [form, setForm] = useState("login");
  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          {form === "login" ? (
            <>
              <Login toggleForm={toggleForm} loading={loading}/>
            </>
          ) : (
            <>
              <Register toggleForm={toggleForm} loading={loading}/>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;
