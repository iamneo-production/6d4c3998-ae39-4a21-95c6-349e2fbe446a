<<<<<<< HEAD
import React from 'react';
import {Navigate,BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ApplyForm from './components/Customer/ApplyForm/ApplyForm';
import LoanStatus from './components/Customer/LoanStatus/LoanStatus';
import Profile from './components/Customer/Profile/Profile';
import Navigationbar from './components/Customer/Navigationbar/Navigationbar';



function App() {
  return (
    <>  
    
    <Router>
    <switch>
      <Navigationbar/>
        <Routes>
          <Route exact path="/" element={<Navigate to="ApplyForm"/>}/> 
          <Route exact path="/ApplyForm" element={<ApplyForm/>}/>
          <Route path="/LoanStatus" element={<LoanStatus/>} />
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
        </switch>
      </Router>
   
   </>
    
  );
}

export default App;
=======
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
>>>>>>> a84f80617592bb97bc9459c408c4a876f2251a97
