import React, { useState,useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from "../../../context/UserContext"

import './ApprovalForm.css';

function ApprovalForm() {
  const [searchQuery, setSearchQuery] = useState('');

          //  User state managment
          const { userModel,setUserModel } = useContext(UserContext);
          const navigate = useNavigate();
          useEffect(() => {
            const storedUser = JSON.parse(localStorage.getItem('userModel'));
            if (storedUser && storedUser.userRole === 'admin') {
              localStorage.removeItem("userModel");
            console.log("token removal is done by admin home")
            setUserModel(null)
              console.log("token removal is done by user home")
              navigate('/user/login');
            }
          }, [navigate]);


  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Search submitted: ${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <>
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter Loan ID to Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
    <br />
    <br />
    <div className="grid-container" id="adminDetailsGrid1">
      <p>Applicant Name : Arul</p>
      <p>Applicant Address : xxxx</p>
      <p>Applicant email : a@gmail.com</p>
      <p>Applicant phone no : 9014262115</p>
      <p>Applicant Loan ID : 03251104</p>
      <p>Applicant Aadhar : xxxx 6</p>
      <p>Applicant Pan no : xxxx</p>
      <p>Applicant Salary : 20000</p>
      <button disabled id="adminRejectLoan">Approved</button>
  </div>
  <div className="grid-container1" id="adminDetailsGrid2">
  <p>Applicant Name : Akash</p>
      <p>Applicant Address : xxxx</p>
      <p>Applicant email : a@gmail.com</p>
      <p>Applicant phone no : 9014262115</p>
      <p>Applicant Loan ID : 03251104</p>
      <p>Applicant Aadhar : xxxx 6</p>
      <p>Applicant Pan no : xxxx</p>
      <p>Applicant Salary : 20000</p>
      <button disabled>Rejected</button>
  </div>
  <div className="grid-container" id="adminDetailsGrid1">
  <p>Applicant Name : Akash</p>
      <p>Applicant Address : xxxx</p>
      <p>Applicant email : a@gmail.com</p>
      <p>Applicant phone no : 9014262115</p>
      <p>Applicant Loan ID : 03251104</p>
      <p>Applicant Aadhar : xxxx 6</p>
      <p>Applicant Pan no : xxxx</p>
      <p>Applicant Salary : 20000</p>
      <button disabled>Approved</button>
  </div>
  </>
  );
}

export default ApprovalForm;
