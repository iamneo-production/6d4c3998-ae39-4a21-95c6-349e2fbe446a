import React, {useState,useContext,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import { loginUser } from "../../../utils/userApi";

import './Login.css'



export default function Login() {

  const navigate = useNavigate();
  const { userModel,setUserModel } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
  const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
 
 
  async function handleLogin() {
    if(email==="" || password===""){
      alert("Please enter all fields")
      console.log("Enter all fields")
    }
    else if(!emailRegex.test(email)){
      alert("Invalid Email");
      console.log("Invalid Email");
      return 
    }
    else if(!passwordRegex.test(password)){
      alert("Password must contaion atleast 6 characters, including one number, one lower and upper case character and one special charaacter like #,@,$,!")
      return 
    }
    else{

      const response = await loginUser(email, password);
      console.log(response.data.userModel,response.data.userModel.userRole)
      try{
        if(response.data.userModel.userRole==="user"){
          console.log("User home page")
          setUserModel(response.data.userModel);
          navigate("/user/home");

        } else if(response.data.userModel.userRole==="admin"){
          console.log("Admin home page")
          setUserModel(response.data.userModel);
         navigate("/admin/home")
        }
      }catch(error){
        alert("Error logging user/admin"+error.message);
      }


      
    }

  }

  return (
    <div className="login-container">
     <div className="login-form">
      <h1 className="login-title"> Login </h1>
     
        <div data-testid="loginBox" className="login-box">
          <div>
            <input
            data-testid="email"
            className = "input-style-login"
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
            className = "input-style-login"
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
              className = "login-btn"
              type="submit"
              id="loginButton"
              value="Login"
              onClick={() => {
                handleLogin();
              }}
            />
            <p className="loginPara">
               &nbsp; New user/admin
              <Link 
                data-testid="signupLink" 
                id="signinLink" 
                to="/user/signup">
                   &nbsp;
                   Signup
              </Link>
            </p>
          </div>
        </div>
      
     </div>
     
    </div>
  );
}

// import React, {useState} from "react";
// import { Link,useNavigate  } from "react-router-dom";
// import './Login.css'
// // import axios from 'axios';




// export default function Login() {

//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedAs, setIsLoggedIn] = useState("");

//   const emailRegex= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
 
 
//   function handleLogin() {

   

//     if(email==="" || password===""){
//       alert("Please enter all fields")
//       console.log("Enter all fields")
//     }
//     else if(!emailRegex.test(email)){
//       alert("Invalid Email");
//       console.log("Invalid Email");
//       return 
//     }else if(!passwordRegex.test(password)){
//       alert("Password must contaion atleast 8 characters, including one number, one lower and upper case character and one special charaacter like #,@,$,!");
//       return;
//     }else{
//       const user = {
//         "email":email,
//         "password":password
//       };
      
//       // axios.post("https://8080-eaedbfccddaeafbeafbbdcdbaec.project.examly.io/user/login", user)
//       // .then((response)=>{
          
//       //     alert(` loggin success `);
//       //     console.log(response.data.userModel.userRole,response.data.userModel)
//       //     if(response.data.userModel.userRole==="user"){
//       //       console.log("User home page")
//       //       navigate("/user/home");

//       //     }else if(response.data.userModel.userRole==="admin"){
//       //       console.log("Admin home page")
//       //      navigate("/admin/home")
//       //     }

//       // }).catch((error)=>{
//       //   alert("Error logging user/admin"+error.message);
//       // })

//     }
//   }



//   return (
//     <div className="login-container">
//       <div className="navbar-login">
//          Login
//       </div>
//       <div className="login-form">
//         <div data-testid="loginBox" className="login-box">
//           <div>
//             <input
//             data-testid="email"
//             class = "input-style-login"
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter email"
//               onChange={(e)=>{
//                   setEmail(e.target.value)
//               }}
//             />
//           </div>
//           <div>
//             <input
//              data-testid="password"
//             class = "input-style-login"
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter Password"
//               onChange={(e)=>{
//                   setPassword(e.target.value)
//               }}
//             />
//           </div>
//           <div className="container-btn-para" >
//             <input
//              data-testid="loginButton"
//               class = "input-style-login"
//               type="submit"
//               id="loginButton"
//               value="Login"
//               onClick={() => {
//                 handleLogin();
//               }}
//             />
//             <p className="loginPara">
//               New user/admin
//               <Link
//                 data-testid="signupLink" 
//                 id="signinLink" to="/user/signup">
//                  &nbsp;  Signup
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }