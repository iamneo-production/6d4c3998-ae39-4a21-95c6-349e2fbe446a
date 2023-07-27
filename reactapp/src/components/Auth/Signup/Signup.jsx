import React, {useState} from "react";
import {Link } from "react-router-dom";
import {signUpUser,loginUser} from "../../../utils/userApi"

import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
//  npm i react-toastify@9.0.3
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const [userType, setAdminOrUser] = useState("");
  
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const notify = (msg)=>{toast(msg)}
   const emailRegex= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  const mobileNumberRegex = /^\d{10}$/;



   function handleSignup(){
    if(userType==="" ||  email==="" || userName==="" || mobileNumber==="" || password==="" || confirmPassword===""){
      
      notify("Please enter all details")
    }
    else if(!emailRegex.test(email)){
      
      notify("Invalid Email");
     
      
    }
    else if(!passwordRegex.test(password)){  
      notify("Password must contaion atleast 8 characters, including one number, one lower and upper case character and one special charaacter like #,@,$,!")
      
    }
    else if(password!==confirmPassword){
      notify("Passcodes does'nt match")
    }
    else if(!mobileNumberRegex.test(mobileNumber)){
      notify("Invalid mobile number");
    
    }
    else{
      setLoading(true);
      signUpUser(email,mobileNumber,password,userType,userName,setLoading)
     
    }
  }
  return (
    <div className="register-container">
    <div className="register-form">
      <h1 className="navbar-register"> {loading?'Processing' : 'Register'} </h1>
  
   
        <input
          data-testid="userType"
          className="input-style-signup"
          type="text"
          name="user"
          id="user"
          placeholder="Enter admin/user"
          value={userType}
          onChange={(e) => {
            setAdminOrUser(e.target.value);
          }}
        />
      
        <input
          data-testid="email"
          className="input-style-signup"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

   
        <input
          data-testid="username"
          className="input-style-signup"
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

  
        <input
          data-testid="mobileNumber"
          className="input-style-signup"
          type="text"
          name="mobileNumber"
          id="mobileNumber"
          placeholder="Enter Mobilenumber"
          value={mobileNumber}
          onChange={(e) => {
            setMobileNumber(e.target.value);
          }}
        />
   
     
        <input
          data-testid="password"
          className="input-style-signup"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
     
      
        <input
          data-testid="confirmPassword"
          className="input-style-signup"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder=" Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      
      <div class="container-btn-para">
  <input
    data-testid="submitButton"
    class="signup-button"
    type="submit"
    id="submitButton"
    value="Submit"
    onClick={() => {
      handleSignup();
    }}
  />
  <p class="loginPara">
    Already a user? <Link data-testid="signinLink" id="signinLink" to="/user/login">&nbsp; Login</Link>
  </p>
</div>

     
    </div>
  </div>
  
  );
}