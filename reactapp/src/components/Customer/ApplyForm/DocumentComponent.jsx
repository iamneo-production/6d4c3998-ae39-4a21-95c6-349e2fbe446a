import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/utils";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "./ApplyForm.css";
export default function DocumentComponent({ addLoan, responseDetails }) {
  const [loan, setLoan] = useState(null);

  const [doc, setDoc] = useState(null);
  const [isUploadDisabled, setIsUploadDisabled] = useState(true);
  const [isApplyDisabled, setIsApplyDisabled] = useState(true);
  const [showLoan, setShowLoan] = useState(false);
  const token = localStorage.getItem("jwtToken");

  // loads loan details
  useEffect(() => {
    async function loadLoanFromDb() {
      try {
        const res = await fetch(`${BASE_URL}/user/viewLoan`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw Error("1st use error");
        }
        const data = await res.json();
        console.log("loan details from ist use efffect", data);
        setLoan(data);
      } catch (e) {
        console.log(e.message, e);
      }
    }
    loadLoanFromDb();
  }, [responseDetails]);

  // this is for checking the status of application A/R
  // useEffect(() => {
  //   async function checkStatus() {
  //     if (loan?.status === "pending") {
  //       try {
  //         const res = await fetch(`${BASE_URL}/user/viewLoan`, {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });

  //         if (!res.ok) {
  //           throw Error(" error geting loan status");
  //         }
  //         const data = await res.json();
  //         console.log(data);

  //       } catch (e) {
  //         console.log(e.message, e);
  //       }
  //     }
  //   }
  //   checkStatus();
  // }, [loan]);

  function handleDoc(e) {
    const file = e.target.files[0];

    setDoc(file);
    setIsUploadDisabled(false);
  }

  async function handleUpload() {
    if (!doc || isUploadDisabled) {
      alert("Please select a file to upload");
      return;
    }

    console.log("Bearer ", token);

    try {
      const formData = new FormData();
      formData.append("file", doc);

      const res = await fetch(`${BASE_URL}/user/addDocuments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        console.log(res.status, res);
        throw new Error("Upload failed");
      }

      console.log("status:", res.status);
      const data = await res.json();

      setIsApplyDisabled(false);
    } catch (error) {
      alert(error);
    }
  }

  async function showLoanDetails() {
    setShowLoan(true);
  }

  return (
    <>
      {/* Document part  */}
      <div className="form-group card1">
        {/* click here- box  */}
        {loan !== null &&
          Object.keys(loan).length !== 0 &&
          showLoan === true && (
            <div >
              <Dialog open={showLoan} fullWidth={true} maxWidth={`sm`}>
                <DialogTitle style={{ fontWeight: "bold" }}>
                  Loan Status
                </DialogTitle>
                <DialogContent>
                  <DialogContentText style={{ fontWeight: "bold" }}>
                    Loan id: {loan.loanId}
                  </DialogContentText>
                  <DialogContentText style={{ fontWeight: "bold" }}>
                    Email: {loan.applicantEmail}
                  </DialogContentText>
                  <DialogContentText style={{ fontWeight: "bold" }}>
                    LoanStatus :{loan.status}
                   
                  </DialogContentText>
                  <br />
                  <hr />
                  <br />
                  <DialogContentText style={{ fontWeight: "bold" }}>
                  {loan.status === "approve"
                      ? "  You can see your monthly emi and other details in Profile Secition please visit!!"
                      : " "}

                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => {
                      setShowLoan(false);
                    }}
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )}
        {/* Response box after loan is applied  new 1*/}
        {/* {loan !== null && Object.keys(loan).length !== 0 && (
          <div className="loan-status">
            Your loan application is being verified{" "}
            <span onClick={showLoanDetails}>click here</span> to view your loan
            details
          </div>
        )} */}
        {loan?.status === "pending" && (
          <div className="loan-status">
            Your loan application is being verified{" "}
            <span onClick={showLoanDetails}>click here</span> to view your loan
            details
          </div>
        )}
        {loan?.status === "approve" && (
          <div className="loan-status-approve">
            <span className="congratulations">
              Congratulations, your loan has been approved!
            </span>{" "}
            <span onClick={showLoanDetails} className="view-loan-details">
              Click here
            </span>{" "}
            
          </div>
        )}

        <label for="selectDocumentType">Upload documents(Mandatory *)</label>
        <br></br>
        <select
          className="input-form"
          name="selectDocumentType"
          id="selectDocumentType"
        >
          <option value="pdf">pdf</option>
          <option value="jpg">jpg</option>
          <option value="png">png</option>
        </select>
      </div>

      <div className="form-group">
        <p style={{fontSize:'16px',fontFamliy:'Times New Roman',fontWeight:'bold'}}>⚠ Document Size Less than 2MB ⚠</p>
        {/* choose file */}
        <input
          className="input-form"
          type="file"
          id="chooseFile"
          onChange={handleDoc}
        />
        <br></br>
        {/* upload buton */}
        <button
          onClick={handleUpload}
          id="uploadDocumentButton"
          disabled={isUploadDisabled}
        >
          Upload Documents
        </button>
      </div>
      <button onClick={addLoan} id="applyLoan" disabled={isApplyDisabled}>
        {loan ? "Loan Applied" : "Apply loan"}
      </button>
    </>
  );
}