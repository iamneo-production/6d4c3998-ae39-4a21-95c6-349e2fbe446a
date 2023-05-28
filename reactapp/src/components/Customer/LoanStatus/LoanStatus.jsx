import React, { useEffect,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import UserContext from '../../../context/UserContext'
import "./style.css";

export default function LoanStatus() {
  const { userModel,setUserModel } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userModel'));
    if (storedUser && storedUser.userRole === 'admin') {
      localStorage.removeItem("userModel");
      console.log("token removal is done by admin home")
      setUserModel(null)
      navigate('/user/login');
    }
  }, [navigate]);


  return (
    <div>
      <h1>Loan status</h1>
      {userModel && (
        <form>
        <div className="form-groupp">
          <label for="enterLoan">Track Your Loan Application</label>
          <br></br><br></br>
          <input type="text" className="enterLoanId"  placeholder="Enter your Loan id"/>
          <br>
          </br><br></br>
          <button type="button" className="trackButton">Track</button>
        </div>
        </form>
      )}
    </div>
  )
}
