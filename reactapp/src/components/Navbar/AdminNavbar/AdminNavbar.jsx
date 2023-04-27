import { FaBars } from 'react-icons/fa';
import React,{useState,useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import UserContext from '../../context/UserContext';
import './AdminNavbar.css';

function AdminNavbar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const { userModel ,setUserModel} = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    setUserModel(null);
    // localStorage.removeItem("token");
     localStorage.removeItem("userModel");
    navigate("/user/login");
  }

  return (
    <nav className="navigation">
    <a href="/" className="brand-name">
      Education Loan
    </a>
    <button className="hamburger" 
    onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
      
      <FaBars />
    </button>
    <div
      className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
      }>
      <ul>
        <li >
          <a href="/appliedloans" id='adminAppliedLoans'>Applied Loans</a>
        </li>
        <li id='AdminLoanDetails'>
          <a href="/loandetails">Loan Details</a>
        </li>
        <li id="logout">
          <a href="/">Logout</a>
        </li>
      </ul>
    </div>
    </nav>
  );
}

export default AdminNavbar;
