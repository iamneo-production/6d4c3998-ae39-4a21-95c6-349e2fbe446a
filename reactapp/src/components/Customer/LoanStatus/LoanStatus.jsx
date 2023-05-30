import React, { useEffect, useContext,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import {BASE_URL } from '../../../utils/utils'
import './style.css';

export default function LoanStatus() {
  const { userModel, setUserModel } = useContext(UserContext);
  const [loanId, setLoanId] = useState("")
  const [loanDetails, setLoanDetails] = useState(null)
  const [showLoan, setShowLoan] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userModel'));
    if (storedUser && storedUser.userRole === 'admin') {
      localStorage.removeItem('userModel');
      console.log('token removal is done by admin home');
      setUserModel(null);
      navigate('/user/login');
    }
  }, [navigate]);

 async function handleTrack(e){
    e.preventDefault()

    try{
      const token = localStorage.getItem('jwtToken');
     const  res = await fetch(`${BASE_URL}/user/viewLoan/${loanId}`,{
      method: 'GET',
      headers:{
        
        Authorization: `Bearer ${token}`
      },
     
     })

     if(!res.ok){
     
      throw(Error("Unable to get loan details..! Please Try again"))
     }
     const data = await res.json();
   
     setLoanDetails(data)
     setShowLoan(true)
    
    }catch(e){
      alert(e.message)
    
    }

  }

  return (
    <div className="card">
      <div className="card-content">
        <h1 style={{ color: 'black' }}>Loan status</h1>

          <form>
            <div className="form-group">
              <label htmlFor="enterLoan">Track Your Loan Application</label>
              <br />
              <input type="text" className="enterLoanId" placeholder="Enter your Loan id" 

                onChange={(e)=>setLoanId(e.target.value)}
              />
              <br />
              <br />
              <button type="button" className="trackButton"
                onClick={handleTrack}
              >
                Track
              </button>
            </div>
          </form>
          <div>

          {/* css update and info is req */}
          {loanDetails && 
        ( showLoan && loanDetails && <div className="response-loan-details" > 
         <p>Loan id: {loanDetails.loanId}</p>
         <p>Applicant Name: {loanDetails.applicantName}</p>
         <p>Applicant Email: {loanDetails.applicantEmail}</p>
         <p>Loan Status :{loanDetails.status}</p>
         <button onClick={ ()=>{setShowLoan(false)}} >close</button>
         </div>) }
          </div>

      </div>
      {/* <img src="https://i.ibb.co/RgKMP1H/undraw-Server-status-re-n8ln.png" alt="Image" className="card-image" /> */}
    </div>
  );
}