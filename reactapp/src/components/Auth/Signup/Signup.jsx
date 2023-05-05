import React, {useState} from "react";
import {Link } from "react-router-dom";

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
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
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
  function handleSignup(){
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
      alert("Password must contaion atleast 8 characters, including one number, one lower and upper case character and one special charaacter like #,@,$,!")
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
      console.log(user);

      axios.post("https://8080-fdbebebebffaeddaeafbeafbbdcdbaec.project.examly.io/user/signup", user)
              .then((response)=>{
                  console.log(response.status,response.data);
                  alert(`${response.data.userModel.userRole} added`);
                  if(response.data.userModel.userRole==="admin"){
                    window.location.href = "/admin/login";
                  }else {
                    window.location.href = "/user/login";
                 }
                
              }).catch((error)=>{
                alert("Error registering user/admin"+error.message);
                
              })
      
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
            className="input-style-signup" 
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
