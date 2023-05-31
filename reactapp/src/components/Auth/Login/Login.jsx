import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import UserContext from "../../../context/UserContext";
import { useContext, useEffect } from "react";
import { loginUser } from "../../../utils/userApi";
import { JwtTokenContext } from "../../../context/TokenContext";
import { createTokenStorage } from "../../../utils/utils";

import {toast} from 'react-toastify'

export default function Login() {
  const notify = (meg)=>{toast(meg)}
  const lemail = localStorage.getItem("email");
  const lpassword = localStorage.getItem("password");
  const navigate = useNavigate();
  const { userModel, setUserModel } = useContext(UserContext);
  const { setJwtToken } = useContext(JwtTokenContext);

  const [email, setEmail] = useState(lemail);
  const [password, setPassword] = useState(lpassword);

  const [loading, setLoading] = useState(false)

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

  async function handleLogin() {
    if (email === "" || password === "") {
      notify("Enter all fields");
    } else if (!emailRegex.test(email)) {
      notify("Invalid Email");
      
    } else if (!passwordRegex.test(password)) {
      notify("Invalid Password")
    } else {
      setLoading(true)
      try {
        const response = await loginUser(email, password);

        if (!response.ok) throw Error("Error loging");
        const data = await response.json();

        if (data.success === true) {
          if (data.userModel.userRole === "user") {
            console.log(data.token);
            setJwtToken(data.token);
            setUserModel(data.userModel);
            createTokenStorage(data.token);
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            navigate("/user/home");
          } else if (data.userModel.userRole === "admin") {
            console.log(data.token);
            setJwtToken(data.token);
            setUserModel(data.userModel);
            createTokenStorage(data.token);
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            navigate("/admin/home");
          }
          setLoading(false)
        } else if (data.success === false) {
          setLoading(false)
          console.log("Invalid email or password");
        }
      } catch (e) {
        setLoading(false)
        
        console.log(e);
      }
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">{loading?'Loging..!': 'Login'}</h1>
        <div data-testid="loginBox" className="loginBox">
          <div>
            <input
              className="input-style-login"
              data-testid="email"
              type="email"
              value={email}
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="input-style-login"
              data-testid="password"
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="container-btn-para">
            <input
              data-testid="loginButton"
              className="login-btn"
              type="submit"
              id="loginButton"
              value="Login"
              onClick={() => {
                handleLogin();
              }}
            />
            <p className="loginPara">
              &nbsp; New user/admin
              <Link data-testid="signupLink" id="signupLink" to="/user/signup">
                &nbsp; Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
