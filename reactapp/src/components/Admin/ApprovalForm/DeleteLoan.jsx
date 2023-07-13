import React, { useState, useEffect } from "react";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { BASE_URL } from "../../../utils/utils";
import "./EditLoan.css"

const DeleteLoan = () => {
  const token = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    loanId: "",
    applicantName: "",
    applicantMobile: "",
    applicantEmail: "",
    applicantAadhaar: "",
    applicantPan: "",
    applicantSalary: "",
    loanAmountRequired: "",
    loanRepaymentMonths: ""
  });

  useEffect(() => {
    async function getLoanData() {
      try {
        const res = await fetch(`${BASE_URL}/admin/getAllLoans`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw Error("Failed to get loan data");
        const data = await res.json();
        const loan = data.find((loan) => loan.loanId === parseInt(id));
        setFormData((prevData) => ({
          ...prevData,
          ...loan,
        }));
        console.log(id);
        //setFormData(loan);
      } catch (e) {
        console.log(e.message, e);
      }
    }

    getLoanData();
  }, [id, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeleteLoan = async () => {
    alert("Are you sure want to delete this Loan");
    try {
      const res = await fetch(`${BASE_URL}/admin/deleteLoan/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        navigate("/admin/getAllLoans"); // Redirect to loans page after successful deletion
      } else {
        throw Error("Failed to delete loan");
      }
    } catch (error) {
      console.log(error.message, error);
    }
  };

 

  return (
    <div>
      <AdminNavbar />

      <form onSubmit={handleDeleteLoan} className="edit-loan-form">
        <TextField
          label="Loan Id"
          value={formData.loanId}
          name="loanId"
          onChange={handleInputChange}
          disabled
        />

        <TextField
          label="Name"
          value={formData.applicantName}
          name="applicantName"
          onChange={handleInputChange}
          disabled
        />

        <TextField
          label="Mobile Number"
          value={formData.applicantMobile}
          name="applicantMobile"
          onChange={handleInputChange}
        />

        <TextField
          label="Email"
          value={formData.applicantEmail}
          name="applicantEmail"
          onChange={handleInputChange}
          disabled
        />

        <TextField
          label="Aadhar"
          value={formData.applicantAadhaar}
          name="applicantAadhaar"
          onChange={handleInputChange}
        />

        <TextField
          label="PAN"
          value={formData.applicantPan}
          name="applicantPan"
          onChange={handleInputChange}
        />

        <TextField
          label="Salary"
          value={formData.applicantSalary}
          name="applicantSalary"
          onChange={handleInputChange}
        />

        <TextField
          label="Loan Amount"
          value={formData.loanAmountRequired}
          name="loanAmountRequired"
          onChange={handleInputChange}
        />

        <TextField
          label="Repayment Months"
          value={formData.loanRepaymentMonths}
          name="loanRepaymentMonths"
          onChange={handleInputChange}
        />

        <Button variant="contained" type="submit">
          Delete
        </Button>
      </form>
    </div>
  );
};

export default DeleteLoan;
