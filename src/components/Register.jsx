import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/actions";
import { TailSpin } from "react-loader-spinner";

const Register = ({ toggleForm,loading }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(file);
    const myForm = new FormData();
    myForm.append("email", email);
    myForm.append("name", name);
    myForm.append("password", password);
    myForm.append("file", file);
    dispatch(registerUser(myForm));
  };
  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <h2>Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="profilePic">
          <label >Profile picture</label>
          <input type="file"  onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <button>
          {loading ? (
            <TailSpin
              height="25"
              width="25"
              color="white"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "Sign Up"
          )}
        </button>
        <p>
          Already registered ? <Link onClick={toggleForm}>Login</Link>
        </p>
      </form>
    </>
  );
};

export default Register;
