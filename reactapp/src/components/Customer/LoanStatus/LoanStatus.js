import React from 'react'
import './style.css';
export default function LoanStatus(){
    return(
    <form>
  <div className="form-group">
    <label for="enterLoan">Track Your Loan Application</label>
    <br></br><br></br>
    <input type="text" className="enterLoanId"  placeholder="Enter your Loan id"/>
    <br>
    </br><br></br>
    <button type="button" className="trackButton">Track</button>
  </div>
  </form>
    )
}