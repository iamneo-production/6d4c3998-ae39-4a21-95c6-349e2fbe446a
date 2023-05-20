import React, {useState} from "react";
import {Link } from "react-router-dom";
import {signUpUser} from "../../../utils/userApi"
import axios from "axios";
import './Signup.css';


export default function Signup() {

  // const [userType, setAdminOrUser] = useState("");
  
  // const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("")
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  
  const [userData,setUserData] = useState({
    userType:"",
    email:"",
    userName:"",
    mobileNumber:"",
    password:"",
    confirmPassword:""
  })
  const emailRegex= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
  const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
  const mobileNumberRegex = /^\d{10}$/;


  function handleChange(e){
    const {name,value} = e.target;
    setUserData((prevData)=>{
      return {
        ...prevData,
        [name] : value
      }
    })
  }
  async function handleSignup(){
    if(userData.userType==="" ||  userData.email==="" || userData.userName==="" || userData.mobileNumber==="" || userData.password==="" || userData.confirmPassword===""){
      alert("Please enter all fields")
      console.log("Please enter all details")
    }
    else if(!emailRegex.test(userData.email)){
      console.log("Invalid Email");
      alert("Invalid Email");
      return;
    }
    else if(!passwordRegex.test(userData.password)){
      alert("Password must contaion atleast 6 characters, including one number, one lower and upper case character and one special charaacter like #,@,$,!")
      console.log("Password must contaion atleast 8 characters, including one number, one lower and upper case character and one special charaacter like #,@,$,!")
      return;
    }
    else if(userData.password!==userData.confirmPassword){
      alert("Passwords does not match")
      return;
    }
    else if(!mobileNumberRegex.test(userData.mobileNumber)){
      console.log("Invalid mobile number");
      alert("Invalid Mobile no.");
      return;
    }
    else{

      const user = {
        
        "email":userData.email,
        "mobileNumber":userData.mobileNumber,
        "password":userData.password,
        "userRole":userData.userType,
        "username":userData.userName
      };
      console.log("user before sighnup",user);
      const data = await signUpUser(userData.email,userData.mobileNumber,userData.password,userData.userType,userData.userName)
      console.log("sts after signup completed",data)
      
    }
  }
  return (
    <div>
      <div className="navbar-register">
         Register 
      </div>
      <div className="register-form">
        
          <div>
            <input
              data-testid="userType"
              className="input-style-signup" 
              type="text"
              name="userType"
              id="user"
              placeholder="Enter admin/user"
              value={userData.userType}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
            data-testid="email"
            className="input-style-signup" 
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
            data-testid="username"
            className="input-style-signup" 
              type="text"
              name="userName"
              id="username"
              placeholder="Enter Username"
              value={userData.userName}
              onChange={handleChange}
            />
          </div>
           <div>
            <input
            data-testid="mobileNumber"
            className="input-style-signup" 
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              placeholder="Enter Mobilenumber"
              value={userData.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
            data-testid="password"
            className="input-style-signup" 
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
              />
          </div>
          <div>
            <input
             data-testid="confirmPassword"
             className="input-style-signup" 
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder=" Confirm Password"
              value={userData.confirmPassword}
              onChange={handleChange}
              />
          </div>
          <div>
            <input
             data-testid="submitButton"
             className="signup-button" 
              type="submit"
              id="submitButton"
              value="Submit"
              onClick={()=>{
                handleSignup()
              }}
              />
          </div>
          <p className="loginPara" >
                  Aldready a user ?
              <Link data-testid='signinLink' id="signinLink" to="/user/login">&nbsp; Login</Link>

          </p>
        </div>
    </div>
  );
}
