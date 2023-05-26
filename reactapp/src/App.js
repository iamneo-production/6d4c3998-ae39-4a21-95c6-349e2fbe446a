import React, { useState, useEffect } from "react";
import UserContext from "./context/UserContext";
//import {Routes,Route} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";

import ApplyForm from "./components/Customer/ApplyForm/ApplyForm";
import UserSharedLayout from "./sharedlayout/UserSharedLayout";
import AdminSharedLayout from "./sharedlayout/AdminSharedLayout";
import AdminHomePage from "./components/Admin/AdminHomePage/AdminHomePage";
import ApprovalForm from "./components/Admin/ApprovalForm/ApprovalForm";
import ApprovedForm from "./components/Admin/ApprovedForm/ApprovedForm";
import Profile from "./components/Customer/Profile/Profile";
import LoanStatus from "./components/Customer/LoanStatus/LoanStatus";
import EditLoan  from "./components/Admin/ApprovalForm/EditLoan";
import DeleteLoan from "./components/Admin/ApprovalForm/DeleteLoan";
import RepaymentSchedule from "./components/Admin/ApprovedForm/RepaymentSchedule/RepaymentSchedule";
import "./App.css";

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
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user/signup" element={<Signup />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/admin/login" element={<Login />} />

            <Route path="/user/home" element={<UserSharedLayout />}>
              <Route index element={<ApplyForm />} />
              <Route path="loanstatus" element={<LoanStatus />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            <Route path="/admin/home" element={<AdminSharedLayout />}>
              <Route index element={<AdminHomePage />} />
            </Route>

            <Route path="/admin/getAllLoans" element={<ApprovalForm />}></Route>
            <Route path="/admin/LoanDetails" element={<ApprovedForm />}></Route>
            <Route path="/admin/editStudent/:id" element={<EditLoan />}/> 
            <Route path="/admin/deleteStudent/:id" element={<DeleteLoan />}/>
            <Route path="/admin/generateSchedule" element={<RepaymentSchedule/>}></Route>

          </Routes>
        </Router>
      </>
    </UserContext.Provider>
  );
}

export default App;