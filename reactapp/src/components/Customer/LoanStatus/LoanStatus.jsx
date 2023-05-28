import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import './style.css';

export default function LoanStatus() {
  const { userModel, setUserModel } = useContext(UserContext);
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

  return (
    <div className="card">
      <div className="card-content">
        <h1 style={{ color: 'black' }}>Loan status</h1>
        {userModel && (
          <form>
            <div className="form-group">
              <label htmlFor="enterLoan">Track Your Loan Application</label>
              <br />
              <input type="text" className="enterLoanId" placeholder="Enter your Loan id" />
              <br />
              <br />
              <button type="button" className="trackButton">
                Track
              </button>
            </div>
          </form>
        )}
      </div>
      {/* <img src="https://i.ibb.co/RgKMP1H/undraw-Server-status-re-n8ln.png" alt="Image" className="card-image" /> */}
    </div>
  );
}