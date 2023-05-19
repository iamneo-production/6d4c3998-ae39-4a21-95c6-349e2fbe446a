import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../../index.css";
import Loading from "../common/Loading";
import EmptyState from "../common/EmptyState";

const AppliedLoans = () => {
  const [loanData,setLoanData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
    async function fetchData() {
      
      setIsLoading(false);
    }
  }, []);

 
  

  

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div id="appliedLoans" className="container bg-user-dashboard py-3">
            {loanData.length === 0 && <EmptyState />}
            <div className="row">
              
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppliedLoans;
