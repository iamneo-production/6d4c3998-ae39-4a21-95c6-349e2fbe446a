import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../utils/utils";
import "./Payment.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Payment() {
  const [userData, setuserData] = useState(null);
  const [emi, setEmi] = useState(0);
  const [paymentId, setPaymentId] = useState("");
  const [LoanDetails, setLoanDetails] = useState(null);
  const token = localStorage.getItem("jwtToken");
  const [prevPayments, setprevPayments] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (loanId) => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };


  console.log("prvious paymenyts", prevPayments)
  // we need to get a previous payment if the user has made any prev paymnet 

  useEffect(() => {

    async function getPaymentDetails() {
      const res = await fetch(`${BASE_URL}/user/getPaymentDetails`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const data = await res.json();
      console.log("prev payments", data)
      setprevPayments(data)
    }
    getPaymentDetails()
  }, [])



  useEffect(() => {

    async function getLoan() {
      try {
        const token = localStorage.getItem('jwtToken')

        const respons = await fetch(`${BASE_URL}/user/viewLoan`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        if (!respons.ok) {
          throw Error("Error geting loan")
        }
        const LoanData = await respons.json();

        console.log("loanData", LoanData);
        setLoanDetails(LoanData)
      } catch (e) {
        console.log(e);
      }
    }

    getLoan();
  }, []);

  // getting user profile  , user emi , 
  useEffect(() => {
    async function getUserProfile() {
      try {
        const token = localStorage.getItem("jwtToken");
        const res = await fetch(`${BASE_URL}/user/getProfile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw Error("Unable to get User profile");
        }
        const data = await res.json();
        console.log("user_profile", data);

        const emiValue = Math.round(data.monthlyEmi);
        setEmi(emiValue);

        setuserData(data);
      } catch (e) {
        alert(e.message);
      }
    }
    getUserProfile();
  }, [prevPayments]);

  async function razorpayHandler(res) {
    console.log(res.razorpay_payment_id);
    setPaymentId(res.razorpay_payment_id);



    // send the payment details now
    // total amount implies --> total amount with intrest.

    const currentDate = new Date();
    let paymentDetailsRequest;
    if (prevPayments.length === 0) {
      // for the first time no need to send repaymentMonts and remaining amount 
      // backend will automatically calculate it.
      const paymentDetails = {
        paymentId: res.razorpay_payment_id,
        totalAmount: LoanDetails?.totalAmountWithIntrest,
        amountPaid: emi,
        remainingAmount: 0,
        totalPaymentMonths: parseInt(LoanDetails?.loanRepaymentMonths),
        remainingPaymentMonths: 0,
        dateOfPayment: currentDate.toISOString(),
        userProfileModel: {
          email: userData.email,
        },
      };
      paymentDetailsRequest = paymentDetails;
    } else {
      // for the 2nd 3rd and so on ... we need to send the remaoing amount and months
      const lastPaymnetFromDb = prevPayments[prevPayments.length - 1]
      const paymentDetails = {
        paymentId: res.razorpay_payment_id,
        totalAmount: LoanDetails?.totalAmountWithIntrest,
        amountPaid: emi,
        remainingAmount: lastPaymnetFromDb.remainingAmount,
        totalPaymentMonths: parseInt(LoanDetails?.loanRepaymentMonths),
        remainingPaymentMonths: lastPaymnetFromDb.remainingPaymentMonths,
        dateOfPayment: currentDate.toISOString(),
        userProfileModel: {
          email: userData.email,
        },
      };
      paymentDetailsRequest = paymentDetails;
    }

    console.log("PAYYYMENT DETAILS REquest is :", paymentDetailsRequest);

    // after all the logic is completed send the correct payment info to backend
    const r = await fetch(`${BASE_URL}/user/emi_payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(paymentDetailsRequest),
    });
    const paymentRes = await r.json();
    setprevPayments((prev) => {
      return [...prev, paymentRes]
    })
    console.log("Payment is completed and the response from backend is:", paymentRes)
  }

  function handlePayment(e) {
    // RAZORPAY ACCOUNT EMAIL : krishnakumar.j22@gmail.com
    e.preventDefault();
    if (emi === "0") {
      console.log(emi);
    } else {
      var options = {
        key: "rzp_test_ltWhzQLe96u6ZP",
        key_secret: "YraNw2FoGT3YPgdoML5Z1QzF",
        amount: emi * 100,
        currency: "INR",
        name: "Delta Education Loans",
        description: "delta des",
        handler: razorpayHandler,
        prefill: {
          name: "test",
          email: "u@gmail.com",
          contact: "7330637595",
        },
        notes: {
          address: "Razorpay Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      console.log(options);
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="container-payment">
      <div>
        <h2 style={{color:"black"}}>Hi User</h2>
        <h2 style={{color:"black"}}>Welcome to Payments Page</h2>
        <h3>Monthly Emi : {emi}</h3>
      </div>
      <div class="paybutton-container">
      <button onClick={handlePayment} className="button-payment" disabled={emi === 0}>Pay Your Monthly Emi </button>
      <button onClick={handleClickOpen} className="button-payments">View Payment History</button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} style={{ backgroundColor: "white", color: "black" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Payment History of User
            </Typography>
          </Toolbar>
        </AppBar>
      </Dialog>
      </div>
    </div>
  );
}