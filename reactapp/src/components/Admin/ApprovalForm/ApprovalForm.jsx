<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import "./ApprovalForm.css";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { useNavigate, useParams } from "react-router-dom";

import { BASE_URL } from "../../../utils/utils";

function ApprovalForm() {
  const token = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const [approvalLoans, setApprovalLoans] = useState([]);
  

  const handleEdit = (id) => {
    navigate(`/admin/editStudent/${id}`);
  };

  const handleDelete = (id) => {
    navigate(`/admin/deleteStudent/${id}`);
=======
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
>>>>>>> 97abf19 (user-admin-routes-protection)
  };

  const viewDocuments = async (applicantEmail) => {
    try {
      const res = await fetch(
        `${BASE_URL}/admin/getDocuments?applicantEmail=${applicantEmail}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        }
      );
  
      if (!res.ok) {
        throw Error("Failed to get documents");
      }
  
   
  
      const blob = await res.blob();
      const fileType = blob.type.split("/")[1];
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `document.${fileType}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.log(e.message, e);
    }
  };
  
  

  useEffect(() => {
    async function getAllLoans() {
      try {
        const res = await fetch(`${BASE_URL}/admin/getAllLoans`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw Error("Failed to get all loans");
        const data = await res.json();
        const pendingLoans = data.filter((loan) => loan.status === "pending");
        setApprovalLoans(pendingLoans);
        console.log(data);
      } catch (e) {
        console.log(e.message, e);
      }
    }

    getAllLoans();
  }, [token]);

  async function sendLoanStatus(data) {
    try {
      const res = await fetch(`${BASE_URL}/admin/editLoan/${data.loanId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          loanStatus: data.loanStatus,
        }),
      });

      if (!res.ok) {
        throw Error("Failed to update loan status");
      }

      const resData = await res.json();
      alert("Updated the Status Successfully");
      setTimeout(function () {
        window.location.reload();
      }, 3000);
      console.log(resData);
    } catch (e) {
      console.log(e.message, e);
    }
  }

  return (
    <>
      <AdminNavbar />

      {approvalLoans.length > 0 ? (
        approvalLoans.map((application) => (
          <div key={application.loanId} className="adminLoanGrid1">
            <p>Name: {application.applicantName}</p>
            <p>Phone no: {application.applicantMobile}</p>
            <p>Email: {application.applicantEmail}</p>
            <p>Aadhar: {application.applicantAadhaar}</p>
            <p>PAN: {application.applicantPan}</p>
            <p>Salary: {application.applicantSalary}</p>
            <p>Loan Amt: {application.loanAmountRequired}</p>
            <p>Repayment Months: {application.loanRepaymentMonths}</p>
            <br />
            <button
              id="viewDocuments"
              onClick={() => viewDocuments(application.applicantEmail)}
            >
              Download Documents
            </button>

            <div className="button-container">
              <button
                className="approve-button"
                onClick={() =>
                  sendLoanStatus({
                    loanId: application.loanId,
                    loanStatus: "approve",
                  })
                }
              >
                Approve
              </button>
              <div className="action-buttons">
                <button
                  className="reject-button"
                  onClick={() =>
                    sendLoanStatus({
                      loanId: application.loanId,
                      loanStatus: "rejected",
                    })
                  }
                >
                  Reject
                </button>
                <div className="icon-container">
                  <button
                    type="submit"
                    id="editLoan"
                    onClick={() => handleEdit(application.applicantLoanID)}
                  >
                    <i title="Edit Loan">
                      <EditTwoToneIcon />
                    </i>
                  </button>
                  <button
                    type="submit"
                    id="deleteLoan"
                    onClick={() =>
                      handleDelete(application.applicantLoanID)
                    }
                  >
                    <i title="Delete Loan">
                      <DeleteOutlineTwoToneIcon />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="img-contain">
          <img
            src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png"
            className="image"
            alt="img"
          />
        </div>
      )}

      <p data-testid="customerName"></p>
      <p data-testid="amount"></p>
      <p data-testid="dueMonths"></p>
      <p data-testid="approveButton"></p>
      <p data-testid="rejectButton"></p>
    </>
  );
}

export default ApprovalForm;