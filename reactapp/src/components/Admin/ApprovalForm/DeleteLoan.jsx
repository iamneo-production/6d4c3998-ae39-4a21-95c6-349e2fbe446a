// import React, { useState, useEffect } from "react";
// import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
// import { useNavigate, useParams } from "react-router-dom";
// import approvaldata from "../../../data/approvaldata.json";
// import { TextField, Button } from "@mui/material";
// import "./DeleteLoan.css";


// const LoanDetails = {
//   applicantLoanID: "",
//   applicantName: "",
//   applicantPhoneNo: "",
//   applicantEmail: "",
//   applicantAadhar: "",
//   applicantPanNo: "",
//   applicantSalary: "",
//   applicantLoanamt: "",
//   applicantRepaymentMon: "",
// };

// const DeleteLoan = () => {
//   const [formData, setFormData] = useState(LoanDetails);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const editData = approvaldata.find((loan) => loan.applicantLoanID === id);
//     if (editData) {
//       setFormData(editData);
//     } else {
//       console.log("Data Not found");
//     }
//   }, [id, navigate]);

//   const handleInputChange = (e, key) => {
//     const currentData = {
//       ...formData,
//     };
//     currentData[key] = e.target.value;
//     setFormData(currentData);
//   };

//   const handleFormEdit = (e) => {
//     e.preventDefault();
//     alert(`Are you sure want to Delete this Loan`)
//     navigate('/admin/getAllLoans');
    
//   };

// //   const editStudent = () => {
// //     const updatedData = approvaldata.map((loan) => {
// //       if (loan.applicantLoanID === id) {
// //         return formData;
// //       }
// //       return loan;
// //     });

// //     try {
// //       localStorage.setItem('approvalData', JSON.stringify(updatedData));
// //       console.log("Student details updated successfully.");
// //       navigate("/admin/getAllLoans");
// //     } catch (error) {
// //       console.error("Error updating student details:", error);
// //     }
// //   };

//   return (
//     <div>
//       <AdminNavbar />

//       <form onSubmit={handleFormEdit} className="edit-loan-form">
//         <TextField
//           label="Loan ID"
//           value={formData.applicantLoanID}
//           onChange={(e) => handleInputChange(e, "applicantLoanID")}
//           disabled
//         />

//         <TextField
//           label="Name"
//           value={formData.applicantName}
//           onChange={(e) => handleInputChange(e, "applicantName")} disabled
//         />

//         <TextField
//           label="Phone Number"
//           value={formData.applicantPhoneNo}
//           onChange={(e) => handleInputChange(e, "applicantPhoneNo")} disabled
//         />

//         <TextField
//           label="Email"
//           value={formData.applicantEmail}
//           onChange={(e) => handleInputChange(e, "applicantEmail")} 
//           disabled
//         />

//         <TextField
//           label="Aadhar Number"
//           value={formData.applicantAadhar}
//           onChange={(e) => handleInputChange(e, "applicantAadhar")} disabled
//         />

//         <TextField
//           label="PAN Number"
//           value={formData.applicantPanNo}
//           onChange={(e) => handleInputChange(e, "applicantPanNo")} disabled
//         />

//         <TextField
//           label="Salary"
//           value={formData.applicantSalary}
//           onChange={(e) => handleInputChange(e, "applicantSalary")} 
//           disabled
//         />

//         <TextField
//           label="Loan Amount"
//           value={formData.applicantLoanamt}
//           onChange={(e) => handleInputChange(e, "applicantLoanamt")} disabled
//         />

//         <TextField
//           label="Repayment Months"
//           value={formData.applicantRepaymentMon}
//           onChange={(e) => handleInputChange(e, "applicantRepaymentMon")} disabled
//         />

//         <Button variant="contained" type="submit" >Delete</Button>
//       </form>
//     </div>
//   );
// };


// export default DeleteLoan;