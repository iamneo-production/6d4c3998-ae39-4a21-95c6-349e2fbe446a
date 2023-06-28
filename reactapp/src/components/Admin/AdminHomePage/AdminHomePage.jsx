import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
// Testing
import "./AdminHomePage.css";
import { Button } from "./Button";

export default function AdminHomePage() {
  const { userModel, setUserModel } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userModel"));
    if (storedUser && storedUser.userRole === "user") {
      localStorage.removeItem("userModel");
      console.log("token removal is done by admin home");
      setUserModel(null);
      navigate("/user/login");
    }
  }, [navigate]);

  function handleLogout() {
    setUserModel(null);
    // localStorage.removeItem("token");
    localStorage.removeItem("userModel");
    navigate("/user/login");
  }
  function handleAllLoans() {
    navigate("/admin/getAllLoans");
  }

  function makeGenerateSchedule() {
    navigate("/admin/generateSchedule");
  }

  return (
    <>
      <div className="hero-container">
        <h1>Education Loan Admin Portal</h1>
        <p>Welcome Back Admin</p>
        {/* <p>Welcome Back {userModel.username}</p> */}
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={makeGenerateSchedule}
          >
            Repayment Schedule
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={handleLogout}
          >
            Logout <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
      <p data-testid="customerName"></p>
      <p data-testid="amount"></p>
    </>
  );
}
