<<<<<<< HEAD
import React, { useState } from "react";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import data from "../../../data/data.json";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./ApprovedForm.css";
import { useNavigate , useParams } from "react-router-dom";

function ApprovedForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLoans, setFilteredLoans] = useState(data);
=======
import React, { useState, useEffect } from "react";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import { useNavigate } from "react-router-dom";
import "./ApprovedForm.css";
import { BASE_URL } from "../../../utils/utils";

function ApprovedForm() {
  const token = localStorage.getItem("jwtToken");
  const [searchQuery, setSearchQuery] = useState("");
  const [loanData, setLoanData] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

<<<<<<< HEAD
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");

    const filteredData = data.filter(
      (application) =>
        application.applicantLoanID.includes(searchQuery) ||
        application.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredLoans(filteredData);
  };

  // const handleGenerateRepayment = () => {
  //   navigate('/admin/generateSchedule');
  // }

=======
  useEffect(() => {
    const fetchApprovedLoans = async () => {
      try {
        const response = await fetch(`${BASE_URL}/admin/getAllLoans`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch loans");
        }
  
        const data = await response.json();
  
        const approvedAndRejectedLoans = data.filter(
          (loan) => loan.status === "approve" || loan.status === "rejected"
        );
  
        setLoanData(approvedAndRejectedLoans);
        setFilteredLoans(approvedAndRejectedLoans);
      } catch (error) {
        console.error(error);
      }
    };
  
    if (token) {
      fetchApprovedLoans();
    }
  }, [token]);
  

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");
    console.log(filteredLoans);
  
    const filteredData = filteredLoans.filter((application) => {
      // const loanIdMatch = application.loanId.includes(searchQuery);
      const loanIdMatch = application.loanId.toString().includes(searchQuery);
      const statusMatch = application.status.toLowerCase().includes(searchQuery.toLowerCase());
      const nameMatch = application.applicantName.toLowerCase().includes(searchQuery.toLowerCase());
      return statusMatch || nameMatch || loanIdMatch;
    });
    
    console.log(filteredData);
    setFilteredLoans(filteredData);
    setTimeout(function(){ window.location.reload(); }, 10000);
  };
  
  
  
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09

  return (
    <>
      <AdminNavbar />
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Enter Loan ID or Status to Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <br />
      <br />
      {filteredLoans.map((application, index) => (
        <div
          className={
<<<<<<< HEAD
            application.status === "Approved"
=======
            application.status === "approve"
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
              ? "grid-container"
              : "grid-container1"
          }
          key={index}
        >
          <p> Name: {application.applicantName}</p>
          <p>Email: {application.applicantEmail}</p>
<<<<<<< HEAD
          <p>Phone No: {application.applicantPhoneNo}</p>
          <p>Aadhar: {application.applicantAadhar}</p>
          <p>PAN No: {application.applicantPanNo}</p>
          <p>Salary: {application.applicantSalary}</p>
          <p>Loan Applied : {application.applicantLoanamt}</p>
          <p>Repayment Mon : {application.applicantRepaymentMon}</p>
          <button disabled>
            {application.status === "Approved" ? "Approved" : "Rejected"}
          </button>
          {/* {application.status === "Approved" && (
            
              <button type="submit" id="generateShedule" onClick={()=>handleGenerateRepayment()}>
                Generate Repayment Schedule
              </button>
            
=======
          <p>Phone No: {application.applicantMobile}</p>
          <p>Aadhar: {application.applicantAadhaar}</p>
          <p>PAN No: {application.applicantPan}</p>
          <p>Salary: {application.applicantSalary}</p>
          <p>Loan Applied: {application.loanAmountRequired}</p>
          <p>Repayment Mon: {application.loanRepaymentMonths}</p>
          <button disabled>
            {application.status === "approve" ? "Approved" : "Rejected"}
          </button>
          {/* {application.status === "Approved" && (
            <button
              type="submit"
              id="generateShedule"
              onClick={() => handleGenerateRepayment()}
            >
              Generate Repayment Schedule
            </button>
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
          )} */}
        </div>
      ))}
    </>
  );
}

<<<<<<< HEAD
export default ApprovedForm;
=======
export default ApprovedForm;
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
