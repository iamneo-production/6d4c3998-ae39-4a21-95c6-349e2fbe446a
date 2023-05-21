import React, { useEffect,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import UserContext from "../../../context/UserContext"
import './Profile.css'
function Profile() {
        
    const { userModel,setUserModel } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('userModel'));
      if (storedUser && storedUser.userRole === 'admin') {
        localStorage.removeItem("userModel");
      console.log("token removal is done by admin home")
      setUserModel(null)
        console.log("token removal is done by user home")
        navigate('/user/login');
      }
    }, [navigate]);
  
  
  return (
     <div>
      <h1> Customer Profile </h1>
      {userModel ? (
        <div className="profile-container">
        <h2>Profile Information</h2>
        <form className="profile-form">
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <span id="name">{"customer.name"}</span>
          </div>
  
          <div className="form-field">
            <label htmlFor="mobile">Mobile Number:</label>
            <span id="mobile">{"customer.mobile"}</span>
          </div>
  
          <div className="form-field">
            <label htmlFor="address">Address:</label>
            <span id="address">{"customer.address"}</span>
          </div>
  
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <span id="email">{"customer.email"}</span>
          </div>
  
          <div className="form-field">
            <label htmlFor="loanId">Loan ID:</label>
            <span id="loanId">{"customer.loanid"}</span>
          </div>
  
          <div className="form-field">
            <label htmlFor="monthlyEmi">Monthly EMI:</label>
            <span id="monthlyEmi">{"customer.monthlyemi"}</span>
          </div>
        </form>
      </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Profile;