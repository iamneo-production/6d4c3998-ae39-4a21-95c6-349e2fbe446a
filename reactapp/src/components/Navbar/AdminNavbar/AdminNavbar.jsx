import { FaBars } from "react-icons/fa";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import "./AdminNavbar.css";
import ApprovedForm from "../../Admin/ApprovedForm/ApprovedForm";

function AdminNavbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showAppliedLoans, setshowAppliedLoans] = useState(true);
  const { userModel, setUserModel } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    setUserModel(null);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userModel");
    navigate("/user/login");
  }
  // const handleNavClick = (navId) => {
  //   if (navId === "adminAppliedLoans") {
  //     setshowAppliedLoans(true);
  //   } else {
  //     setshowAppliedLoans(false);
  //   }
  // };

  return (
    <>
      <nav className="navigation">
        <a href="/admin/home" className="brand-name">
          Education Loan
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FaBars />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              {/* <a href="/getAllLoans" id='adminAppliedLoans'>Applied Loans</a> */}
              <Link
                to="/admin/getAllLoans"
                id="adminAppliedLoans"
                // onClick={() => handleNavClick("adminAppliedLoans")}
              >
                Applied Loans
              </Link>
            </li>
            <li>
              <Link
                to="/admin/LoanDetails"
                id="AdminLoanDetails"
                // onClick={() => handleNavClick("AdminLoanDetails")}
              >
                Loan Details
              </Link>
            </li>
            <li id="logout">
              <Link to="/admin/login" id="logout" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* {showAppliedLoans ? <>adios</>
    : <ApprovedForm />} */}
    </>
  );
}

export default AdminNavbar;