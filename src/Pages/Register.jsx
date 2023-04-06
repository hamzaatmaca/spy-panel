import React, { useEffect, useState } from "react";
import fetchService from "../Hooks/useFetch";
import swal from "sweetalert";
import logo from "../Images/logo.png";
import validation from "../Hooks/useValidation";

const Register = () => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const nameRef = React.useRef();
  const surnameRef = React.useRef();
  const hostnameRef = React.useRef();
  const countryRef = React.useRef();
  const cityRef = React.useRef();
  const addressRef = React.useRef();
  const phoneRef = React.useRef();

  const handlePayload = () => {
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      hostname: hostnameRef.current.value,
      city: cityRef.current.value,
      address: addressRef.current.value,
      country: countryRef.current.value,
      phone: phoneRef.current.value,
    };
    const validate = validation(payload);
    if (validate) {
      fetchService("register", "POST")
        .then((res) => {
          console.log(res);
          setTimeout(() => {
            window.location.href = "login";
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          swal(err.response.data.data);
        });
    } else {
      swal("Please fill in all field");
    }
  };

  const handleLogin = () => {
    window.location.href = "login";
  };

  return (
    <div className="container loginContainer mt-5">
      <div className="row ">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-sm-5"
        >
          <img width={500} src={logo} className="logoImage" />
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm-12 mb-2">
              <h3 className="loginHeader">Register Here</h3>{" "}
            </div>
          </div>
          <div className="registerInputArea">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <i style={{ color: "#1f512e" }} class="fa-solid fa-signature"></i>
              &nbsp;&nbsp;&nbsp;
              <b>Name</b>
            </label>
            <input
              ref={nameRef}
              type="text"
              className="form-control  loginInput"
              placeholder="Enter your Name"
            />
          </div>
          <div className="registerInputArea">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <i
                style={{ color: "#1f512e" }}
                class="fa-solid fa-file-signature"
              ></i>
              &nbsp;&nbsp;&nbsp;
              <b>Surname</b>
            </label>
            <input
              ref={surnameRef}
              type="text"
              className="form-control  loginInput"
              placeholder="Enter your Surname"
            />
          </div>
          <div className="registerInputArea">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <i style={{ color: "#1f512e" }} class="fa-solid fa-globe"></i>
              &nbsp;&nbsp;&nbsp;
              <b>Country</b>
            </label>
            <input
              ref={countryRef}
              type="text"
              className="form-control  loginInput"
              placeholder="Enter your Country"
            />
          </div>
          <div className="registerInputArea">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <i style={{ color: "#1f512e" }} class="fa-solid fa-city"></i>
              &nbsp;&nbsp;&nbsp;
              <b>City</b>
            </label>
            <input
              ref={cityRef}
              type="text"
              className="form-control  loginInput"
              placeholder="Enter your City"
            />
          </div>
          <div className="registerInputArea">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <i
                style={{ color: "#1f512e" }}
                class="fa-solid fa-address-book"
              ></i>
              &nbsp;&nbsp;&nbsp;
              <b>Address</b>
            </label>
            <input
              ref={addressRef}
              type="text"
              className="form-control  loginInput"
              placeholder="Enter your Address"
            />
          </div>
          <div className="registerInputArea">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <i style={{ color: "#1f512e" }} class="fa-solid fa-phone"></i>
              &nbsp;&nbsp;&nbsp;
              <b>Phone</b>
            </label>
            <input
              ref={phoneRef}
              type="text"
              className="form-control loginInput"
              placeholder="Enter your Phone"
            />
          </div>
          <div className="registerInputArea">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <i style={{ color: "#1f512e" }} class="fa-solid fa-server"></i>
              &nbsp;&nbsp;&nbsp;
              <b>Hostname</b>
            </label>
            <input
              ref={hostnameRef}
              type="text"
              className="form-control  loginInput"
              placeholder="Enter your Hostname"
            />
          </div>
          <div className="registerInputArea">
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
              className="form-control  loginInput"
              placeholder="Enter your email"
            />
          </div>
          <div className="registerInputArea">
            <label htmlFor="exampleFormControlInput1" className="form-label ">
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
            Sign In
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
          <b onClick={handleLogin} className="register">
            Login Page
          </b>
        </div>
      </div>
    </div>
  );
};

export default Register;
