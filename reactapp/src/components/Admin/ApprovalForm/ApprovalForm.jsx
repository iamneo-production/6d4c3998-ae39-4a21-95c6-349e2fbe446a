import React, { useEffect } from "react";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import "./ApprovalForm.css";
// import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
// import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import approvaldata from "../../../data/approvaldata.json";
import {useNavigate,useParams} from "react-router-dom";

import {BASE_URL} from "../../../utils/utils"


function ApprovalForm() {

  const token = localStorage.getItem('jwtToken');
  const navigate = useNavigate();
  const [approvalLoans, setApprovalLoans] = React.useState([])
  const handleEdit = (id) => {
    navigate(`/admin/editStudent/${id}`)
  }

  const handleDelete = (id) => {
    navigate(`/admin/deleteStudent/${id}`)
  }

  // GET ALLL LOANS 
  useEffect(()=>{
   
   async function getAllLoans(){
      try{
        const res = await fetch(`${BASE_URL}/admin/getAllLoans`,{
          method:"GET",
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        if(!res.ok) throw (Error("failed to get all loans"))
        const data = await res.json();
        setApprovalLoans(data);
       
      }catch(e){
        console.log(e.message,e)
      }
    }

    getAllLoans();


  },[])

  // APPROVE OR REJECT
  async function sendLoanStatus(data){


  const res = await fetch(`${BASE_URL}/admin/editLoan/${data.loanId}`,{
    method:"PUT",
    headers:{
      'Content-Type':'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      loanStatus : data.loanStatus
    })

  })
  const resData = await res.json();
  console.log(resData)
  }

  return (
    <>
      <AdminNavbar />
      
      {approvalLoans.map((application) => (
        <div key={application.loanId} className="adminLoanGrid1">
          <p>Name: {application.applicantName}</p>
          <p>Phone no: {application.applicantMobile}</p>
          <p>Email: {application.applicantEmail}</p>
          <p>Aadhar: {application.applicantAadhaar}</p>
          <p>PAN: {application.applicantPan}</p>
          <p>Salary: {application.applicantSalary}</p>
          <p>Loan Amt: {application.loanAmountRequired}</p>
          <p>Repayment Months: {application.loanRepaymentMonths}</p>
          <div className="button-container">
            <button className="approve-button" onClick={()=>{sendLoanStatus({loanId:application.loanId,loanStatus:"approve"})}} >Approve</button>
            <div className="action-buttons">
              <button className="reject-button" onClick={()=>{sendLoanStatus({loanId:application.loanId,loanStatus:"rejected"})}} >Reject</button>
              <div className="icon-container">
                <button type="submit" id="editLoan" onClick={()=>handleEdit(application.applicantLoanID)}>
                <i title="Edit Loan">
                  {/* <EditTwoToneIcon /> */}
                </i>
                </button>
                <button type="submit" id="deleteLoan" onClick={()=>handleDelete(application.applicantLoanID)}>
                <i title="Delete Loan">
                  {/* <DeleteOutlineTwoToneIcon /> */}
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