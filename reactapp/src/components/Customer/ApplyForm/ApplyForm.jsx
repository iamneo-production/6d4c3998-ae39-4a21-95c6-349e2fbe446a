import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import UserNavbar from "../../Navbar/UserNavbar/UserNavbar";
import { BASE_URL } from "../../../utils/utils";
import DocumentComponent from './DocumentComponent'
import "./ApplyForm.css";

export default function ApplyForm() {
  const { userModel, setUserModel } = useContext(UserContext);
  const [customerLoanData, setCustomerLaonData] = React.useState({
    loantype: "Education Loan",
    applicantName: "",
    applicantMobile: "",
    applicantEmail: "",
    applicantAadhaar: "",
    applicantPan: "",
    applicantSalary: "",
    applicantAddress: "",
    loanAmountRequired: "",
    loanRepaymentMonths: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const [responseDetails, setResponseDetails] = useState(null)

  // handles page change - updates the state
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  async function addLoan(e) {
    e.preventDefault();
    console.log('add loan clicked')
    const token = localStorage.getItem("jwtToken");
    console.log("Bearer ", token);
    const reqBody = { ...customerLoanData };
    console.log("reqBody", reqBody);
    try {
      const res = await fetch(`${BASE_URL}/user/addLoan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          loantype: "Education Loan",
          applicantName: reqBody.applicantName,
          applicantMobile: reqBody.applicantMobile,
          applicantEmail: reqBody.applicantEmail,
          applicantAddress: reqBody.applicantAddress,
          applicantAadhaar: reqBody.applicantAadhaar,
          applicantPan: reqBody.applicantPan,
          applicantSalary: reqBody.applicantSalary,
          loanAmountRequired: reqBody.loanAmountRequired,
          loanRepaymentMonths: reqBody.loanRepaymentMonths,
        }),
      });
      if (!res.ok) {
        console.log(res.status);
      }
      console.log("status:", res.status);
      const data = await res.json();
      setResponseDetails(data);
    } catch (error) {
      console.log(error.message);
      alert(error);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userModel"));
    if (storedUser && storedUser.userRole === "admin") {
      localStorage.removeItem("userModel");
      console.log("token removal is done by admin home");
      setUserModel(null);
      navigate("/user/login");
    }
  }, [navigate]);

  function handleChange(e) {
    const { name, value } = e.target;

    setCustomerLaonData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <div className="apply-form">
      {currentPage === 1 && (<form className="form1 card1">
        <h3 style={{ paddingBottom: "20px" }}>Take time! Fill the Details Carefully 😊</h3>
        <div className="form-group">
          <input
            data-testid="enterName"
            id="enterName"
            className="input-form"
            type="text"
            name="applicantName"
            placeholder="Enter Applicant Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input-form"
            type="text"
            name="applicantAddress"
            id="enterAddress"
            placeholder="Enter Applicant Address"
            data-testid="enterAddress"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            className="input-form"
            type="text"
            name="applicantMobile"
            id="enterMobile"
            placeholder="Enter Applicant Mobile"
            data-testid="enterMobile"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input-form"
            type="text"
            name="applicantEmail"
            id="enterEmail"
            placeholder="Enter Applicant Email Id"
            data-testid="enterEmail"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input-form"
            type="text"
            name="applicantAadhaar"
            id="enterAadhaarNo"
            placeholder="Enter Applicant Aadhaar No "
            data-testid="enterAadhaarNo"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input-form"
            type="text"
            name="applicantPan"
            id="enterPanNo"
            placeholder="Enter Applicant PAN no "
            data-testid="enterPanNo"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input-form"
            type="text"
            name="applicantSalary"
            id="enterSalary"
            placeholder="Enter Applicant Salary"
            data-testid="enterSalary"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input-form"
            type="text"
            name="loanAmountRequired"
            id="enterAmount"
            placeholder="Enter Loan Amount Required"
            data-testid="enterAmount"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="input-form"
            name="loanRepaymentMonths"
            id="enterMonths"
            placeholder="Enter loan repayment months"
            data-testid="enterMonths"
            onChange={handleChange}
          />
        </div>

      </form>)}
      {currentPage === 2 && <DocumentComponent addLoan={addLoan} responseDetails={responseDetails}  />}


      <div className="page-buttons">
        <button
          className={`page-button ${currentPage === 1 ? 'current-page' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(1);
          }}
        >
          1
        </button>
        <button
          className={`page-button ${currentPage === 2 ? 'current-page' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(2);
          }}
        >
          2
        </button>
      </div>
    </div>
  );
}
