import React, { useState, useEffect } from "react";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import { useNavigate, useParams } from "react-router-dom";
<<<<<<< HEAD
import approvaldata from "../../../data/approvaldata.json";
import { TextField, Button } from "@mui/material";
import "./EditLoan.css";


const LoanDetails = {
  applicantLoanID: "",
  applicantName: "",
  applicantPhoneNo: "",
  applicantEmail: "",
  applicantAadhar: "",
  applicantPanNo: "",
  applicantSalary: "",
  applicantLoanamt: "",
  applicantRepaymentMon: "",
};

const EditLoan = () => {
  const [formData, setFormData] = useState(LoanDetails);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const editData = approvaldata.find((loan) => loan.applicantLoanID === id);
    if (editData) {
      setFormData(editData);
    } else {
      console.log("Data Not found");
    }
  }, [id, navigate]);

  const handleInputChange = (e, key) => {
    const currentData = {
      ...formData,
    };
    currentData[key] = e.target.value;
    setFormData(currentData);
  };

  const handleFormEdit = (e) => {
    e.preventDefault();
    editStudent();
  };

  const editStudent = () => {
    const updatedData = approvaldata.map((loan) => {
      if (loan.applicantLoanID === id) {
        return formData;
      }
      return loan;
    });

    try {
      localStorage.setItem('approvalData', JSON.stringify(updatedData));
      console.log("Student details updated successfully.");
      navigate("/admin/getAllLoans");
    } catch (error) {
      console.error("Error updating student details:", error);
=======
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
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
    }
  };

  return (
    <div>
      <AdminNavbar />

      <form onSubmit={handleFormEdit} className="edit-loan-form">
        <TextField
<<<<<<< HEAD
          label="Loan ID"
          value={formData.applicantLoanID}
          onChange={(e) => handleInputChange(e, "applicantLoanID")}
          disabled
        />

        <TextField
          label="Name"
          value={formData.applicantName}
          onChange={(e) => handleInputChange(e, "applicantName")}
        />

        <TextField
          label="Phone Number"
          value={formData.applicantPhoneNo}
          onChange={(e) => handleInputChange(e, "applicantPhoneNo")}
=======
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
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
        />

        <TextField
          label="Email"
          value={formData.applicantEmail}
<<<<<<< HEAD
          onChange={(e) => handleInputChange(e, "applicantEmail")}
          disabled
        />

        <TextField
          label="Aadhar Number"
          value={formData.applicantAadhar}
          onChange={(e) => handleInputChange(e, "applicantAadhar")}
        />

        <TextField
          label="PAN Number"
          value={formData.applicantPanNo}
          onChange={(e) => handleInputChange(e, "applicantPanNo")}
=======
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
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
        />

        <TextField
          label="Salary"
          value={formData.applicantSalary}
<<<<<<< HEAD
          onChange={(e) => handleInputChange(e, "applicantSalary")}
          disabled
=======
          name="applicantSalary"
          onChange={handleInputChange}
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
        />

        <TextField
          label="Loan Amount"
<<<<<<< HEAD
          value={formData.applicantLoanamt}
          onChange={(e) => handleInputChange(e, "applicantLoanamt")}
=======
          value={formData.loanAmountRequired}
          name="loanAmountRequired"
          onChange={handleInputChange}
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
        />

        <TextField
          label="Repayment Months"
<<<<<<< HEAD
          value={formData.applicantRepaymentMon}
          onChange={(e) => handleInputChange(e, "applicantRepaymentMon")}
        />

        <Button variant="contained" type="submit">Update</Button>
=======
          value={formData.loanRepaymentMonths}
          name="loanRepaymentMonths"
          onChange={handleInputChange}
        />

        <Button variant="contained" type="submit">
          Update
        </Button>
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
      </form>
    </div>
  );
};

<<<<<<< HEAD

export default EditLoan;
=======
export default EditLoan;
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
