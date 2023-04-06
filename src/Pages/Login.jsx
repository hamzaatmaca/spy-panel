import React, { useEffect, useState } from "react";
import fetchService from "../Hooks/useFetch";
import swal from "sweetalert";
import logo from "../Images/logo.png";

const Login = () => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handlePayload = () => {
    fetchService("login", "POST", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
      .then((res) => {
        localStorage.setItem("spy.token", res.data.data);
        window.location.href = "/";
      })
      .catch((err) => {
        swal(err.response.data.error);
      });
  };

  const handleRegister = () => {
    window.location.href = "register";
  };

  return (
    <div className="container loginContainer mt-5">
      <div className="row mt-5 mb-5">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-sm-5"
        >
          <img src={logo} className="logoImage" />
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm-12 mb-4">
              <h3 className="loginHeader">Login Here</h3>{" "}
            </div>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <i
                className="fa-solid fa-envelope "
                style={{ color: "#1f512e" }}
              ></i>
              &nbsp;&nbsp;&nbsp;
              <b>Email address</b>
            </label>
            <input
              ref={emailRef}
              type="email"
              className="form-control mt-4 loginInput"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mb-4"
            >
              <i style={{ color: "#1f512e" }} className="fa-solid fa-lock"></i>
              &nbsp;&nbsp;&nbsp;
              <b>Password</b>
            </label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control loginInput"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={handlePayload}
            className="btn btn-primary loginButton mt-4"
          >
            Login
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
          <b onClick={handleRegister} className="register">
            Register Here
          </b>
        </div>
      </div>
    </div>
  );
};

export default Login;
