
import { BASE_URL } from "./utils";
import {  toast } from 'react-toastify';
const notify = (msg)=>{toast(msg)}
export async function signUpUser(
  email,
  mobileNumber,
  password,
  userType,
  userName,
  setLoading
) {

  try {
    
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
      window.location.href = "/user/login";
    }
    return;
  } catch (error) {
    setLoading(false)
    notify(error.message);
    console.log(error)
   
  }
}

export async function loginUser(email, password) {

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
      
      if(res.status===401) throw new Error(`${res.status} Invalid Credentials`);
      else throw new Error(`${res.status} Error`)
    }

    return res;
  } catch (error) {
    notify(error.message)
    return
  }
}