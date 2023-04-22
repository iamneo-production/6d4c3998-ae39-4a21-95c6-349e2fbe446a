import React, {useState} from "react";
import { Link,useNavigate  } from "react-router-dom";
import './Login.css'
import axios from 'axios';




export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedAs, setIsLoggedIn] = useState("");

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
      alert("Password must contaion atleast 8 characters, including one number, one lower and upper case character and one special charaacter like #,@,$,!");
      return;
    }else{
      const user = {
        "email":email,
        "password":password
      };
      
      axios.post("https://8080-eaedbfccddaeafbeafbbdcdbaec.project.examly.io/user/login", user)
      .then((response)=>{
          
          alert(` loggin success `);
          console.log(response.data.userModel.userRole,response.data.userModel)
          if(response.data.userModel.userRole==="user"){
            console.log("User home page")
            navigate("/user/home");

          }else if(response.data.userModel.userRole==="admin"){
            console.log("Admin home page")
           navigate("/admin/home")
          }

      }).catch((error)=>{
        alert("Error logging user/admin"+error.message);
      })

    }
  }



  return (
    <div className="login-container">
      <div className="navbar-login">
         Login
      </div>
      <div className="login-form">
        <div className="login-box">
          <div>
            <input
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
              <Link id="signinLink" to="/user/signup">
                 &nbsp;  Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
