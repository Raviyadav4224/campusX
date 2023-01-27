import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/actions";
import { TailSpin } from "react-loader-spinner";

const Login = ({ toggleForm, loading }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ CustomModal }) => {
    let email = CustomModal.email;
    let password = CustomModal.password;
    dispatch(loginUser(email, password));
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          {...register("CustomModal.email", { required: true })}
        />
        {errors?.CustomModal?.email ? (
          <p className="error">Email is must</p>
        ) : (
          ""
        )}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          {...register("CustomModal.password", {
            required: true,
            minLength: 8,
            maxLength: 8,
          })}
        />
        {errors?.CustomModal?.password ? (
          <p className="error">Password is must</p>
        ) : (
          ""
        )}
        <button>
          {loading ? (
            <TailSpin
              height="30"
              width="30"
              color="white"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              
            />
          ) : (
            'Login'
          )}
        </button>
        <span>or</span>
        <p>
          New to CampusX ? <Link onClick={toggleForm}>SignUp</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
