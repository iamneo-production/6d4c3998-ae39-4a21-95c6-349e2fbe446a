import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import UserContext from "../../../context/UserContext";
import { useContext, useEffect } from "react";
import { loginUser } from "../../../utils/userApi";
import { JwtTokenContext } from '../../../context/TokenContext'
import {createTokenStorage} from "../../../utils/utils"

export default function Login() {
  const navigate = useNavigate();
  const { userModel, setUserModel } = useContext(UserContext);
  const {jwtToken ,setJwtToken} = useContext(JwtTokenContext);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

  async function handleLogin() {
    if (email === "" || password === "") {
      alert("Please enter all fields");
      console.log("Enter all fields");
    } else if (!emailRegex.test(email)) {
      alert("Invalid Email");
      console.log("Invalid Email");
      return;
    } else if (!passwordRegex.test(password)) {
      alert(
        "Password must contaion atleast 8 characters, including one number, one lower and upper case character and one special charaacter like #,@,$,!"
      );
      return;
    } else {
      const response = await loginUser(email, password);

      const data =await response.json();
      console.log("userModel is :",data.userModel)
      console.log("login :",data.success)
     
      
     if(data.success ===true){
      if (data.userModel.userRole === "user") {
        console.log(data.token)
        setJwtToken(data.token)
        setUserModel(data.userModel);
        createTokenStorage(data.token)
        navigate("/user/home");
      } else if(data.userModel.userRole === "admin"){
        console.log(data.token)
        setJwtToken(data.token)
        setUserModel(data.userModel);
        createTokenStorage(data.token)
        navigate("/admin/home");
      }
      
     }
      
      else if(data.success === false) {
        alert("Invalid email or password");
        console.log("Invalid email or password");
      }


    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Login</h1>
        <div data-testid="loginBox" className="loginBox">
          <div>
            <input
              className="input-style-login"
              data-testid="email"
              type="email"
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
              <Link data-testid="signupLink" id="signinLink" to="/user/signup">
                &nbsp; Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
