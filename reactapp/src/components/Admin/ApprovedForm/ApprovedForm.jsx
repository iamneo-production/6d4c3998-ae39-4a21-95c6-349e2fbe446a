import React, { useState } from "react";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import data from "../../../data/data.json";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./ApprovedForm.css";
import { useNavigate , useParams } from "react-router-dom";

function ApprovedForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLoans, setFilteredLoans] = useState(data);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

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
            application.status === "Approved"
              ? "grid-container"
              : "grid-container1"
          }
          key={index}
        >
          <p> Name: {application.applicantName}</p>
          <p>Email: {application.applicantEmail}</p>
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
            
          )} */}
        </div>
      ))}
    </>
  );
}

export default ApprovedForm;
