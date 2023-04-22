import React, { useState } from "react";
import './ApplyForm.css'


function ApplyForm() {
  const [counter, setCounter] = useState(0);

  function handleNextClick() {
    console.log("Next");
    setCounter(counter + 1);
  }
   
  
  return (
      <div className="apply-form">
        <form className="form1">
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="Applicant Name"
              id="enterName"
              placeholder="Enter Applicant Name"
            />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="address"
              id="enterAddress"
              placeholder="Enter Applicant Address"
            />
          </div>
          
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="mobileNumber"
              id="enterMobile"
              placeholder="Enter Applicant Mobile"
            />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="emailid"
              id="enterEmail"
              placeholder="Enter Applicant Email Id"
            />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="aadhaarno"
              id="enterAadhaarNo"
              placeholder="Enter Applicant Aadhaar No "
              />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text" 
              name="panno"
              id="enterPanNo"
              placeholder="Enter Applicant PAN no "
              />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text"
              name="salary"
              id="enterSalary"
              placeholder="Enter Applicant Salary"
              />
          </div>
          <div className="form-group">
            <input className="input-form"
              type="text"  
              name="loanamount"
              id="enterAmount"
              placeholder="Enter Loan Amount Required" 
              />
          </div>
          <div className="form-group">
            <input 
              type="text"  className="input-form"
              name="months"
              id="enterMonths"
              placeholder="Enter loan repayment months"
              />
          </div>
          <div>
            <input className="btn"
            type="button" 
            name="next"
            id="next"
            value="Next"  onClick={handleNextClick}
            />
          </div>
        </form>
      </div>
  );
}

export default ApplyForm;