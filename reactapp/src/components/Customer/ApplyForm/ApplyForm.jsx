import React from "react";
import './ApplyForm.css';
import { useNavigate } from 'react-router-dom';




function ApplyForm() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/Profile');
  }

  return (

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
            value="Next" onClick={handleClick}
          />
        </div>

      </form>
    </div >
  );
}

export default ApplyForm;