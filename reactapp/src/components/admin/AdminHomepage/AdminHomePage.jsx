import React from "react";
import { Link } from "react-router-dom";
import "./AdminHomePage.css"
const Home = () => {
	const myStyle = {
		color: "white",
		backgroundColor: "DodgerBlue",
		padding: "10px",
		fontFamily: "Sans-Serif"
	  };
return (<>
	<div style={myStyle}>
	<div id="textbox">
	<h2 className="alignleft">Educational Loan</h2>
	<br />{}<h2 className="alignright">Logout</h2></div>
	<br />
		{}
		<center><h3><Link to="/Appliedloan">AppliedLoan</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/Loandetails">Loandetails</Link></h3></center>
	</div>
  </>
);
};

export default Home;
