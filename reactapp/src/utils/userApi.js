<<<<<<< HEAD
import { toast } from "react-toastify";
import { BASE_URL } from "./utils";

const toastMsg = (msg) => toast(msg);
=======

import { BASE_URL } from "./utils";
import {  toast } from 'react-toastify';
const notify = (msg)=>{toast(msg)}
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
export async function signUpUser(
  email,
  mobileNumber,
  password,
  userType,
  userName,
  setLoading
) {
<<<<<<< HEAD
  try {
    setLoading(true)
=======

  try {
    
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
    const res = await fetch(`${BASE_URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        mobileNumber: mobileNumber,
        password: password,
        userRole: userType,
        username: userName,
      }),
    });
    console.log(res.status);
    if (!res.ok) {
<<<<<<< HEAD
      setLoading(false)
      //alert("Signup failed",res.status);
      throw new Error("Signup failed");
    }

    const data = await res.json();
   console.log(data)
    if (userType === "admin") {
      window.location.href = "/admin/login";
    } else {
=======
      console.log("ststaus",res.status)

       throw new Error("Signup failed");
    }

    const data = await res.json();
    console.log(data)
    setLoading(false)

   localStorage.setItem('email', email);
   localStorage.setItem('password', password);
    if (userType === "admin") {
      notify(`${data.message}`)
      window.location.href = "/admin/login";
    } else {
      notify(`${data.message}`)
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
      window.location.href = "/user/login";
    }
    return;
  } catch (error) {
    setLoading(false)
<<<<<<< HEAD
    toastMsg("Error registering user/admin " + error.message);
    throw error;
  }
}

export async function loginUser(email, password,setLoading) {
=======
    notify(error.message);
    console.log(error)
   
  }
}

export async function loginUser(email, password) {
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09

  try {
    const res = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,                                         
        password: password,
      }),
    });                 
    console.log("status is: ",res.status)
    if (!res.ok) {
<<<<<<< HEAD
      setLoading(false)
=======
      
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
      if(res.status===401) throw new Error(`${res.status} Invalid Credentials`);
      else throw new Error(`${res.status} Error`)
    }

    return res;
  } catch (error) {
<<<<<<< HEAD
    setLoading(false)
    toastMsg(error.message);
    return error;
=======
    notify(error.message)
    return
>>>>>>> 3013bd254f4f104ee460805f1ba912c4c5875f09
  }
}
