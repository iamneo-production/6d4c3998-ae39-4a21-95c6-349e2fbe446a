import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

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

export default Navbar;
