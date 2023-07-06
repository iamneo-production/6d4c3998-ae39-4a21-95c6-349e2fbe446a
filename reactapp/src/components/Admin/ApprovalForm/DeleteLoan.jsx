import React, { useState, useEffect } from "react";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import { useNavigate, useParams } from "react-router-dom";
<<<<<<< HEAD
import approvaldata from "../../../data/approvaldata.json";
import { TextField, Button } from "@mui/material";
import "./DeleteLoan.css";


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

const DeleteLoan = () => {
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
    alert(`Are you sure want to Delete this Loan`)
    navigate('/admin/getAllLoans');
    
  };

//   const editStudent = () => {
//     const updatedData = approvaldata.map((loan) => {
//       if (loan.applicantLoanID === id) {
//         return formData;
//       }
//       return loan;
//     });

//     try {
//       localStorage.setItem('approvalData', JSON.stringify(updatedData));
//       console.log("Student details updated successfully.");
//       navigate("/admin/getAllLoans");
//     } catch (error) {
//       console.error("Error updating student details:", error);
//     }
//   };
=======
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

 
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09

  return (
    <div>
      <AdminNavbar />

<<<<<<< HEAD
      <form onSubmit={handleFormEdit} className="edit-loan-form">
        <TextField
          label="Loan ID"
          value={formData.applicantLoanID}
          onChange={(e) => handleInputChange(e, "applicantLoanID")}
=======
      <form onSubmit={handleDeleteLoan} className="edit-loan-form">
        <TextField
          label="Loan Id"
          value={formData.loanId}
          name="loanId"
          onChange={handleInputChange}
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
          disabled
        />

        <TextField
          label="Name"
          value={formData.applicantName}
<<<<<<< HEAD
          onChange={(e) => handleInputChange(e, "applicantName")} disabled
        />

        <TextField
          label="Phone Number"
          value={formData.applicantPhoneNo}
          onChange={(e) => handleInputChange(e, "applicantPhoneNo")} disabled
=======
          name="applicantName"
          onChange={handleInputChange}
          disabled
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
=======
          name="applicantEmail"
          onChange={handleInputChange}
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
          disabled
        />

        <TextField
<<<<<<< HEAD
          label="Aadhar Number"
          value={formData.applicantAadhar}
          onChange={(e) => handleInputChange(e, "applicantAadhar")} disabled
        />

        <TextField
          label="PAN Number"
          value={formData.applicantPanNo}
          onChange={(e) => handleInputChange(e, "applicantPanNo")} disabled
=======
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
          onChange={(e) => handleInputChange(e, "applicantLoanamt")} disabled
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
          onChange={(e) => handleInputChange(e, "applicantRepaymentMon")} disabled
        />

        <Button variant="contained" type="submit" >Delete</Button>
=======
          value={formData.loanRepaymentMonths}
          name="loanRepaymentMonths"
          onChange={handleInputChange}
        />

        <Button variant="contained" type="submit">
          Delete
        </Button>
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
      </form>
    </div>
  );
};

<<<<<<< HEAD

export default DeleteLoan;
=======
export default DeleteLoan;
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
