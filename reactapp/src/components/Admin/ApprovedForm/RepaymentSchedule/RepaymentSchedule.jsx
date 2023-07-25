import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../../Navbar/AdminNavbar/AdminNavbar';
import { BASE_URL } from '../../../../utils/utils';
import './RepaymentSchedule.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentsIcon from '@mui/icons-material/Payments';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function RepaymentSchedule() {
  const token = localStorage.getItem('jwtToken');
  const [loanData, setLoanData] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    async function fetchLoanData() {
      try {
        const res = await fetch(`${BASE_URL}/admin/getAllLoans`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw Error('Failed to get loan data');
        const data = await res.json();
        const approvedLoans = data.filter((loan) => loan.status === 'approve');
        setLoanData(approvedLoans);
      } catch (e) {
        console.log(e.message, e);
      }
    }

    fetchLoanData();
  }, [token]);

  const calculateEmi = (loanAmount, repaymentMonths) => {
    const interestRate = 10.25 / 100;
    const monthlyInterestRate = interestRate / 12;
    const emi =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, repaymentMonths)) /
      (Math.pow(1 + monthlyInterestRate, repaymentMonths) - 1);
    return emi.toFixed(2);
  };

  const handleEditNoteIconClick = () => {
    setEditMode(true);
  };

  return (
    <>
      <AdminNavbar />
      <div className="container">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Name</th>
              <th>Loan Amount</th>
              <th>Interest</th>
              <th>Repayment Months</th>
              <th>E.M.I</th>
              <th>Generate Sch</th>
              <th>Edit Sch</th>
              <th>Delete Sch</th>
            </tr>
          </thead>
          <tbody>
            {loanData.map((item) => (
              <tr key={item.loanId}>
                <td>{item.loanId}</td>
                <td>{item.applicantName}</td>
                <td>{item.loanAmountRequired}</td>
                <td>10.25%</td>
                <td>{item.loanRepaymentMonths}</td>
                <td>{calculateEmi(item.loanAmountRequired, item.loanRepaymentMonths)}</td>
                <td>
                  <ReceiptIcon style={{border: '1px solid black',cursor:'pointer',padding: '5px',borderRadius: '5px'}}/>
                </td>
                <td>
                  <EditIcon style={{border: '1px solid black',cursor:'pointer',padding: '5px',borderRadius: '5px'}}/>
                </td>
                <td>
                  <DeleteForeverIcon  style={{border: '1px solid black',cursor:'pointer',padding: '5px',borderRadius: '5px'}}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RepaymentSchedule;
