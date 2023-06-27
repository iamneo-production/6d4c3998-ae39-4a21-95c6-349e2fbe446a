import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import { BASE_URL } from "../../../utils/utils";
import "./Profile.css";

function Profile() {
  const { userModel, setUserModel } = useContext(UserContext);
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  //const [phoneNumberError, setPhoneNumberError] = useState("");
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
        console.log("profile", data);
        setProfile(data);
      } catch (e) {
        alert(e.message);
      }
    }
    getProfile();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch(`${BASE_URL}/user/editProfile/${profile.userId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      if (!res.ok) {
        throw Error("Unable to save profile");
      }

      setIsEditing(false);
    } catch (e) {
      alert(e.message);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  // const validatePhoneNumber = (phoneNumber) => {
  //   const phoneRegex = /^\d{10}$/;
  //   return phoneRegex.test(phoneNumber);
  // };

  return (
    <div className="profile-wrapper">
      <h1>Customer Profile</h1>
      {profile ? (
        <div className="profile-container">
          <h2>Profile Information</h2>
          <form className="profile-form">
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  id="username"
                  value={profile.username}
                  onChange={handleInputChange}
                />
              ) : (
                <span id="name">{profile.username}</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="mobileNo">Mobile Number:</label>
              {isEditing ? (
             
                  <input
                    type="text"
                    id="mobileNumber"
                    value={profile.mobileNumber}
                    onChange={handleInputChange}
                  />
         
              ) : (
                <span id="mobileNo">{profile.mobileNumber}</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="address">Address:</label>
              {isEditing ? (
                <input
                  type="text"
                  id="address"
                  value={profile.address}
                  onChange={handleInputChange}
                />
              ) : (
                <span id="address">{profile.address}</span>
              )}
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
              <label htmlFor="monthlyemi">Monthly EMI:</label>
              <span id="monthlyemi">{profile.monthlyEmi}</span>
            </div>

            {isEditing ? (
              <button type="button" onClick={handleSaveClick}>
                Save
              </button>
            ) : (
              <button type="button" onClick={handleEditClick}>
                Edit
              </button>
            )}
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;