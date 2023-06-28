<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
<<<<<<< HEAD
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import { UserProvider } from "./context/UserContext";
import UserSharedLayout from "./sharedlayout/UserSharedLayout";
import AdminSharedLayout from "../src/sharedlayout/AdminSharedLayout";
import { JwtTokenProvider } from "./context/TokenContext";
import Profile from "./components/Customer/Profile/Profile";
import ApplyForm from "./components/Customer/ApplyForm/ApplyForm";
import LoanStatus from "./components/Customer/LoanStatus/LoanStatus";
import EditLoan from "./components/Admin/ApprovalForm/EditLoan";
import DeleteLoan from "./components/Admin/ApprovalForm/DeleteLoan";
import RepaymentSchedule from "./components/Admin/ApprovedForm/RepaymentSchedule/RepaymentSchedule";
import AdminHomePage from "./components/Admin/AdminHomePage/AdminHomePage";
import ApprovalForm from "./components/Admin/ApprovalForm/ApprovalForm";
import ApprovedForm from "./components/Admin/ApprovedForm/ApprovedForm";
import Payment from "./components/Customer/Payment/Payment";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
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
import Customerprofile from "./components/Customer/Customerprofile/Customerprofile";
import LoanStatus from "./components/Customer/LoanStatus/LoanStatus";

import './App.css';


>>>>>>> 97abf19 (user-admin-routes-protection)
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
<<<<<<< HEAD
    <JwtTokenProvider>
      <UserProvider>
        <div className="App">
        <ToastContainer theme="dark"/>
          <Routes>
            {/* PUBLIC ROUTE */}
            <Route path="/" element={<Login />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/signup" element={<Signup />} />
            <Route path="/admin/login" element={<Login />} />

            {/* USER ROUTES */}

            <Route path="/user/home" element={<UserSharedLayout />}>
              <Route index element={<ApplyForm />} />
              <Route path="loanstatus" element={<LoanStatus />} />
              <Route path="profile" element={<Profile />} />
              <Route path ="payment" element ={<Payment />} />
            </Route>

            {/* ADMIN ROUTES */}

            <Route path="/admin/home" element={<AdminSharedLayout />}>
              <Route index element={<AdminHomePage />} />
            </Route>

            <Route path="/admin/getAllLoans" element={<ApprovalForm />}></Route>
            <Route path="/admin/LoanDetails" element={<ApprovedForm />}></Route>
            <Route path="/admin/editStudent/:id" element={<EditLoan />} />
            <Route path="/admin/deleteStudent/:id" element={<DeleteLoan />} />
            <Route
              path="/admin/generateSchedule"
              element={<RepaymentSchedule />} />
          </Routes>
        </div>
      </UserProvider>
    </JwtTokenProvider>
=======
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
          <Route path="profile" element={<Customerprofile/>}/>
        </Route>
  
                         {/* ADMIN ROUTES */} 
        <Route path="/admin/home" element={<AdminSharedLayout />} >
          <Route index element={<AdminHomePage/>}/>
          <Route path="approvalform" element={<ApprovalForm/>}/>
        </Route >
  
     </Routes>
>>>>>>> ec7c375eb0cca7bd7c9a7f8018e787209d0ba93a
    </div>
  </UserContext.Provider>
>>>>>>> 97abf19 (user-admin-routes-protection)
  );
}

export default App;
