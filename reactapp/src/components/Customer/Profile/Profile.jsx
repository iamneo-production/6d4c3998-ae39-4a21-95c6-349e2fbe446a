import React, { useEffect, useContext,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import {BASE_URL} from "../../../utils/utils"
import "./Profile.css";

function Profile() {
  const { userModel, setUserModel } = useContext(UserContext);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userModel"));
    if (storedUser && storedUser.userRole === "admin") {
      localStorage.removeItem("userModel");
      setUserModel(null);
      navigate("/user/login");
    }
  }, [navigate]);

  useEffect(() => {
    async function getProfile() {
      try {
        const token = localStorage.getItem("jwtToken");
        const res = await fetch(`${BASE_URL}/user/getProfile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw Error("Unable to get profile");
        }
        const data = await res.json();
        console.log("profile",data)
        setProfile(data);
      } catch (e) {
        alert(e.message);
      }
    }
    getProfile();
  }, []);
  return (
    <div className="profile-wrapper">
      <h1>Customer Profile</h1>
      {profile ? (
        <div className="profile-container">
          <h2>Profile Information</h2>
          <form className="profile-form">
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <span id="name">{profile.username}</span>
            </div>

            <div className="form-field">
              <label htmlFor="mobile">Mobile Number:</label>
              <span id="mobile">{profile.mobileNumber}</span>
            </div>

            <div className="form-field">
              <label htmlFor="address">Address:</label>
              <span id="address">{profile.address}</span>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <span id="email">{profile.email}</span>
            </div>

            <div className="form-field">
              <label htmlFor="loanId">Loan ID:</label>
              <span id="loanId">{profile.loanId}</span>
            </div>

            <div className="form-field">
              <label htmlFor="monthlyEmi">Monthly EMI:</label>
              <span id="monthlyEmi">{profile.monthlyEmi}</span>
            </div>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;