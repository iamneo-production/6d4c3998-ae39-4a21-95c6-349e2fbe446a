import React, { useEffect,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import UserContext from "../../../context/UserContext";



export default function ApplyForm() {

  const { userModel ,setUserModel} = useContext(UserContext);

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



  function handleLogout() {
    setUserModel(null);
 
    navigate("/user/login");
  }
  function printName(){
    alert(userModel.username)
  }


  return (
    <div>
      <h1>This is home page</h1>
      {userModel ? (
        <div className="applyfrom-container">
        <form className="form1">
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="Applicant Name"
              id="enterName"
              placeholder="Enter Applicant Name"
              data-testid="enterName"
            />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="address"
              id="enterAddress"
              placeholder="Enter Applicant Address"
              data-testid="enterAddress"
            />
          </div>
  
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="mobileNumber"
              id="enterMobile"
              placeholder="Enter Applicant Mobile"
              data-testid="enterMobile"
            />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="emailid"
              id="enterEmail"
              placeholder="Enter Applicant Email Id"
              data-testid="enterEmail"
            />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="aadhaarno"
              id="enterAadhaarNo"
              placeholder="Enter Applicant Aadhaar No "
              data-testid="enterAadhaarNo"
            />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="panno"
              id="enterPanNo"
              placeholder="Enter Applicant PAN no "
              data-testid="enterPanNo"
            />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="salary"
              id="enterSalary"
              placeholder="Enter Applicant Salary"
              data-testid="enterSalary"
            />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="loanamount"
              id="enterAmount"
              placeholder="Enter Loan Amount Required"
              data-testid="enterAmount"
            />
          </div>
          <div className="form-group">
            <input
              type="text" className="input-form"
              name="months"
              id="enterMonths"
              placeholder="Enter loan repayment months"
              data-testid="enterMonths"
            />
          </div>
          <div>
            <input className="btn"
              type="button"
              name="next"
              id="next"
              data-testid="next"
              value="Next" 
            />
          </div>
  
        </form>
      </div >
        
      ) : (
        <p>Loading...</p>
      )}
      <div>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={printName}>Print User name</button>
      </div>
    </div>
  )
}
