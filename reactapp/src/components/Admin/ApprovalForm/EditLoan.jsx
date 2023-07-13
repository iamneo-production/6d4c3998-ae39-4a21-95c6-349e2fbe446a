import React, { useState, useEffect } from "react";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { BASE_URL } from "../../../utils/utils";
import "./EditLoan.css"

const EditLoan = () => {
  const token = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
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
        setFormData(loan);
      } catch (error) {
        console.log(error.message, error);
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

  const handleFormEdit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/admin/editLoan/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        navigate("/admin/getAllLoans"); // Redirect to loans page after successful edit
      } else {
        throw Error("Failed to edit loan");
      }
    } catch (error) {
      console.log(error.message, error);
    }
  };

  return (
    <div>
      <AdminNavbar />

      <form onSubmit={handleFormEdit} className="edit-loan-form">
        <TextField
          label="Name"
          value={formData.applicantName}
          name="applicantName"
          onChange={handleInputChange}
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
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditLoan;
