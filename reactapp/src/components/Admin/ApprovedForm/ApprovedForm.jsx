import React, { useState } from "react";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import data from "../../../data/data.json";

import "./ApprovedForm.css";

function ApprovedForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLoans, setFilteredLoans] = useState(data);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");

    const filteredData = data.filter((application) =>
      application.applicantLoanID.includes(searchQuery)
    );
    setFilteredLoans(filteredData);
  };

  return (
    <>
      <AdminNavbar />
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
      {filteredLoans.map((application, index) => (
        <div
          className={
            application.status === "Approved"
              ? "grid-container"
              : "grid-container1"
          }
          key={index}
        >
          <p>Applicant Name: {application.applicantName}</p>
          <p>Applicant Address: {application.applicantAddress}</p>
          <p>Applicant Email: {application.applicantEmail}</p>
          <p>Applicant Phone No: {application.applicantPhoneNo}</p>
          <p>Applicant Loan ID: {application.applicantLoanID}</p>
          <p>Applicant Aadhar: {application.applicantAadhar}</p>
          <p>Applicant PAN No: {application.applicantPanNo}</p>
          <p>Applicant Salary: {application.applicantSalary}</p>
          <button disabled>
            {application.status === "Approved" ? "Approved" : "Rejected"}
          </button>
        </div>
      ))}
    </>
  );
}

export default ApprovedForm;
