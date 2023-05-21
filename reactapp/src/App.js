import React,{useState,useEffect} from "react"
import UserContext from "./context/UserContext"
import {Routes,Route} from "react-router-dom"
import Login from "./components/Auth/Login/Login"
import Signup from "./components/Auth/Signup/Signup";

import ApplyForm from "./components/Customer/ApplyForm/ApplyForm";
import UserSharedLayout from "./sharedlayout/UserSharedLayout";
import AdminSharedLayout from "./sharedlayout/AdminSharedLayout";
import AdminHomePage from "./components/Admin/AdminHomePage/AdminHomePage"
import ApprovalForm from "./components/Admin/ApprovalForm/ApprovalForm"
import Profile from "./components/Customer/Profile/Profile";
import LoanStatus from "./components/Customer/LoanStatus/LoanStatus";

import './App.css';


function App() {

  const [userModel, setUserModel] = useState(() => {
    const storedUserModel = localStorage.getItem("userModel");

    if (storedUserModel) {
      return JSON.parse(storedUserModel);
    }

    return null;
  });
  useEffect(() => {
    localStorage.setItem("userModel", JSON.stringify(userModel));
  }, [userModel]);

  return (
    <UserContext.Provider value={{ userModel, setUserModel }}>

    
    <div className="App">
      <Routes> 
         {/* PUBLIC ROUTE */} 
         <Route path="/" element={<Login />} /> 
         <Route path="/user/signup" element={<Signup />} /> 
         <Route path="/user/login"  element= { <Login/>} /> 
         <Route path="/admin/login"  element= { <Login/>} /> 
                        
                         {/* USER ROUTES */}
               {/* This is kinda home page for user */}
        <Route path="/user/home" element={<UserSharedLayout />} >
          <Route index element={<ApplyForm/>}/>
          <Route path="loanstatus" element={<LoanStatus/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
  
                         {/* ADMIN ROUTES */} 
        <Route path="/admin/home" element={<AdminSharedLayout />} >
          <Route index element={<AdminHomePage/>}/>
          <Route path="approvalform" element={<ApprovalForm/>}/>
        </Route >
  
     </Routes>
    </div>
  </UserContext.Provider>
  );
}

export default App;
