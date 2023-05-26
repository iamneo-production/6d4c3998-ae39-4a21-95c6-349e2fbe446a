import React, { useState } from 'react';
import AdminNavbar from '../../../Navbar/AdminNavbar/AdminNavbar';
import data from '../../../../data/data.json';
import './RepaymentSchedule.css';

function RepaymentSchedule() {
  const [filteredData, setFilteredData] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [remainingAmount, setRemainingAmount] = useState('');

  useState(() => {
    const filtered = data.filter((item) => item.status === 'Approved');
    setFilteredData(filtered);
  }, []);

  const calculateEmi = (loanAmount, repaymentMonths) => {
    const interestRate = 10.25 / 100;
    const monthlyInterestRate = interestRate / 12;
    const emi =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, repaymentMonths)) /
      (Math.pow(1 + monthlyInterestRate, repaymentMonths) - 1);
    return emi.toFixed(2);
  };

  const handleCurrentOutstanding = (loanID) => {
    setOpenDropdownId(loanID);
  };

  const handleCloseDropdown = () => {
    setOpenDropdownId(null);
    setPaymentAmount('');
  };

  const handlePayment = (loanID) => {
    const loan = filteredData.find((item) => item.applicantLoanID === loanID);
    const emiAmount = calculateEmi(loan.applicantLoanamt, loan.applicantRepaymentMon);
    const remaining = (parseFloat(emiAmount) - parseFloat(paymentAmount)).toFixed(2);
    const finalloanamt = (parseFloat(loan.applicantLoanamt) - parseFloat(paymentAmount)).toFixed(2)
    setRemainingAmount(remaining);
    setPaymentAmount('');
    alert(`Remaining EMI Amount: ₹ ${remaining} \nRemaining Loan Amount: ₹ ${finalloanamt}`);
  };

  const handleEditShcedule = (loanID) => {
    //
  }

  const handleDeleteSchedule = (loanID) => {
    //
  }

  return (
    <>
      <AdminNavbar />
      <div className="container">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Loan Amount</th>
              <th>Repayment Months</th>
              <th>Interest</th>
              <th>E.M.I</th>
              <th>Curr. Outstanding</th>
              <th>Edit Schedule</th>
              <th>Del Schedule</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.applicantLoanID}>
                <td>{item.applicantLoanID}</td>
                <td>{item.applicantName}</td>
                <td>{item.applicantSalary}</td>
                <td>{item.applicantLoanamt}</td>
                <td>{item.applicantRepaymentMon}</td>
                <td>10.25%</td>
                <td>{calculateEmi(item.applicantLoanamt, item.applicantRepaymentMon)}</td>
                <td>
                  <button className='click' onClick={() => handleCurrentOutstanding(item.applicantLoanID)}>Click Here</button>
                  {openDropdownId === item.applicantLoanID && (
                    <div className="dropdown">
                      <p>Current Outstanding: ₹ {calculateEmi(item.applicantLoanamt, item.applicantRepaymentMon)}</p>
                      <input
                        type="text"
                        placeholder="Enter amount to pay"
                        value={paymentAmount}
                        onChange={(e) => setPaymentAmount(e.target.value)}
                      />
                      <button className="pay-button" onClick={() => handlePayment(item.applicantLoanID)}>
                        Pay
                      </button>
                      <button className="close-button" onClick={handleCloseDropdown}>
                        Close
                      </button>
                    </div>
                  )}
                </td>
                <td>
                  <button className="click" onClick={() => handleEditShcedule(item.applicantLoanID)}>Click Here</button>
                </td>
                <td>
                  <button className="click" onClick={() => handleDeleteSchedule(item.applicantLoanID)}>Click Here</button>
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
