import React from "react";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import "./ApprovalForm.css";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import approvaldata from "../../../data/approvaldata.json";
import {useNavigate,useParams} from "react-router-dom";


function ApprovalForm() {
  const navigate = useNavigate();
  let approvalloans = approvaldata;
  const handleEdit = (id) => {
    navigate(`/admin/editStudent/${id}`)
  }

  const handleDelete = (id) => {
    navigate(`/admin/deleteStudent/${id}`)
  }
  return (
    <>
      <AdminNavbar />
      
      {approvalloans.map((application) => (
        <div key={application.applicantLoanID} className="adminLoanGrid1">
          <p>Name: {application.applicantName}</p>
          <p>Phone no: {application.applicantPhoneNo}</p>
          <p>Email: {application.applicantEmail}</p>
          <p>Aadhar: {application.applicantAadhar}</p>
          <p>PAN: {application.applicantPanNo}</p>
          <p>Salary: {application.applicantSalary}</p>
          <p>Loan Amt: {application.applicantLoanamt}</p>
          <p>Repayment Months: {application.applicantRepaymentMon}</p>
          <div className="button-container">
            <button className="approve-button">Approve</button>
            <div className="action-buttons">
              <button className="reject-button">Reject</button>
              <div className="icon-container">
                <button type="submit" id="editLoan" onClick={()=>handleEdit(application.applicantLoanID)}>
                <i title="Edit Loan">
                  <EditTwoToneIcon />
                </i>
                </button>
                <button type="submit" id="deleteLoan" onClick={()=>handleDelete(application.applicantLoanID)}>
                <i title="Delete Loan">
                  <DeleteOutlineTwoToneIcon />
                </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <p data-testid="customerName"></p>
      <p data-testid="amount"></p>
      <p data-testid="dueMonths"></p>
      <p data-testid="approveButton"></p>
      <p data-testid="rejectButton"></p>

    </>
  );
}

export default ApprovalForm;
