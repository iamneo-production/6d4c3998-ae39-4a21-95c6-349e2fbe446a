import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../../Navbar/AdminNavbar/AdminNavbar';
import { BASE_URL } from '../../../../utils/utils';
import './RepaymentSchedule.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentsIcon from '@mui/icons-material/Payments';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function RepaymentSchedule() {
  const token = localStorage.getItem('jwtToken');
  const [loanData, setLoanData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (loanId) => {
    setOpen(true);
    const selectedLoan = loanData.find((item) => item.loanId === loanId);
    setLoanData((prevData) => {
      const updatedData = prevData.map((loan) =>
        loan.loanId === loanId
          ? { ...loan, emiSchedule: calculateEmiSchedule(selectedLoan.loanAmountRequired, selectedLoan.loanRepaymentMonths) }
          : loan
      );
      return updatedData;
    });
  };


  const handleClose = () => {
    setOpen(false);
  };

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

  const calculateEmiSchedule = (loanAmount, repaymentMonths) => {
    const interestRate = 10.25 / 100;
    const monthlyInterestRate = interestRate / 12;
    const emi = calculateEmi(loanAmount, repaymentMonths);
    let remainingLoan = loanAmount;
    const emiSchedule = [];

    for (let i = 1; i <= repaymentMonths; i++) {
      const monthlyInterest = remainingLoan * monthlyInterestRate;
      const monthlyPrincipal = emi - monthlyInterest;
      remainingLoan -= monthlyPrincipal;

      emiSchedule.push({
        month: i,
        emi: emi,
        principal: monthlyPrincipal.toFixed(2),
        interest: monthlyInterest.toFixed(2),
        remainingLoan: remainingLoan.toFixed(2),
      });
    }

    return emiSchedule;
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
              <th>Generate Schedule</th>
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
                  <div>
                    <ReceiptIcon style={{ border: '1px solid black', cursor: 'pointer', padding: '5px', borderRadius: '5px' }} onClick={() => handleClickOpen(item.loanId)} />
                    <Dialog
                      fullScreen
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Transition}
                    >
                      <AppBar sx={{ position: 'relative' }} style={{ backgroundColor: "white", color: "black" }}>
                        <Toolbar>
                          <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                          >
                            <CloseIcon />
                          </IconButton>
                          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Repayment Shedule of {item.applicantName}
                          </Typography>
                        </Toolbar>
                      </AppBar>
                      <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" style={{ paddingLeft: "50px", paddingTop: "30px" }}>
                        A man's indebtedness is not virtue; his repayment is. Virtue begins when he dedicates himself actively to the job of gratitude.
                      </Typography>
                      <List style={{ padding: "50px" }}>

                        <table className="schedule-table">
                          <thead>
                            <tr>
                              <th>Month</th>
                              <th>EMI</th>
                              <th>Principal</th>
                              <th>Interest</th>
                              <th>Remaining Loan</th>
                            </tr>
                          </thead>
                          <tbody>
                            {loanData.map((item) => (
                              item.emiSchedule && item.emiSchedule.map((emiItem) => (
                                <tr key={emiItem.month}>
                                  <td>{emiItem.month}</td>
                                  <td>{emiItem.emi}</td>
                                  <td>{emiItem.principal}</td>
                                  <td>{emiItem.interest}</td>
                                  <td>{emiItem.remainingLoan}</td>
                                </tr>
                              ))
                            ))}
                          </tbody>
                        </table>
                      </List>
                      <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" style={{ paddingLeft: "50px", paddingTop: "30px" }}>
                        As per the above schedule Customer Name : {`(`} {item.applicantName} {`)`} need to pay his emi monthly and with in {item.loanRepaymentMonths} Months Make sure he is paying correctly 
                      </Typography>
                      <Button variant="contained" style={{margin:"40px"}}>
                        Send EMI Schedule Email
                      </Button>
                    </Dialog>
                  </div>
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
