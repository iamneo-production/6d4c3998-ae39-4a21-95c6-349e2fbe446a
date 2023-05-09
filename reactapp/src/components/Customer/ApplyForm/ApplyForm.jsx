import React from "react";
import './ApplyForm.css'



function ApplyForm() {

  return (
    <div className="apply-form">
      <form className="form1">
        <div className="form-group">
          <input className="input-form"
            type="text"
            name="Applicant Name"
            id="enterName"
            data-testid="enterName"
            placeholder="Enter Applicant Name"
          />
        </div>
        <div className="form-group">
          <input className="input-form"
            type="text"
            name="address"
            id="enterAddress"
            data-testid="enterAddress"
            placeholder="Enter Applicant Address"
          />
        </div>

        <div className="form-group">
          <input className="input-form"
            type="text"
            name="mobileNumber"
            id="enterMobile"
            data-testid="enterMobile"
            placeholder="Enter Applicant Mobile"
          />
        </div>
        <div className="form-group">
          <input className="input-form"
            type="text"
            name="emailid"
            id="enterEmail"
            data-testid="enterEmail"
            placeholder="Enter Applicant Email Id"
          />
        </div>
        <div className="form-group">
          <input className="input-form"
            type="text"
            name="aadhaarno"
            id="enterAadhaarNo"
            data-testid="enterAadhaarNo"
            placeholder="Enter Applicant Aadhaar No "
          />
        </div>
        <div className="form-group">
          <input className="input-form"
            type="text"
            name="panno"
            id="enterPanNo"
            data-testid="enterPanNo"
            placeholder="Enter Applicant PAN no "
          />
        </div>
        <div className="form-group">
          <input className="input-form"
            type="text"
            name="salary"
            id="enterSalary"
            data-testid="enterSalary"
            placeholder="Enter Applicant Salary"
          />
        </div>
        <div className="form-group">
          <input className="input-form"
            type="text"
            name="loanamount"
            id="enterAmount"
            data-testid="enterAmount"
            placeholder="Enter Loan Amount Required"
          />
        </div>
        <div className="form-group">
          <input
            type="text" className="input-form"
            name="months"
            id="enterMonths"
            data-testid="enterMonths"
            placeholder="Enter loan repayment months"
          />
        </div>
      </form>
    </div>
  );
}

export default ApplyForm;