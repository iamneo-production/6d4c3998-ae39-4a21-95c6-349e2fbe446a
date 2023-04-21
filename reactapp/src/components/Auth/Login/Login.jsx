import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Login.css'



export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
 
 
  function handleLogin() {
    if(email==="" || password===""){
      alert("Please enter all fields")
      console.log("Enter all fields")
    }
    else if(!emailRegex.test(email)){
      alert("Invalid Email");
      console.log("Invalid Email");
      return 
    }else if(!passwordRegex.test(password)){
      alert("Password must contaion atleast 8 characters, including one number, one lower and upper case character and one special charaacter like #,@,$,!")
      return 
    }else{
      alert("You are awesome")
    }

  }

  return (
    <div className="login-container">
      <div className="navbar-login">
         Login
      </div>
      <div className="login-form">
        <div data-testid="loginBox" className="login-box">
          <div>
            <input
            data-testid="email"
            class = "input-style-login"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={(e)=>{
                  setEmail(e.target.value)
              }}
            />
          </div>
          <div>
            <input
            data-testid="password"
            class = "input-style-login"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e)=>{
                  setPassword(e.target.value)
              }}
            />
          </div>
          <div className="container-btn-para" >
            <input
            data-testid="loginButton"
              class = "input-style-login"
              type="submit"
              id="loginButton"
              value="Login"
              onClick={() => {
                handleLogin();
              }}
            />
            <p className="loginPara">
              New user/admin
              <Link data-testid="signupLink" id="signinLink" to="/user/signup">
                 &nbsp;  Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
