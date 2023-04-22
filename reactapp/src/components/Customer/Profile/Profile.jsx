
import './Profile.css'

const Profile = () => {


  return (
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
  );
};

export default Profile;
