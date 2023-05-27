import { toast } from "react-toastify";
import { BASE_URL } from "./utils";

const toastMsg = (msg) => toast(msg);
export async function signUpUser(
  email,
  mobileNumber,
  password,
  userType,
  userName,
  setLoading
) {
  try {
    setLoading(true)
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
      setLoading(false)
      //alert("Signup failed",res.status);
      throw new Error("Signup failed");
    }

    const data = await res.json();
   console.log(data)
    if (userType === "admin") {
      window.location.href = "/admin/login";
    } else {
      window.location.href = "/user/login";
    }
    return;
  } catch (error) {
    setLoading(false)
    toastMsg("Error registering user/admin " + error.message);
    throw error;
  }
}

export async function loginUser(email, password,setLoading) {

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
      setLoading(false)
      if(res.status===401) throw new Error(`${res.status} Invalid Credentials`);
      else throw new Error(`${res.status} Error`)
    }

    return res;
  } catch (error) {
    setLoading(false)
    toastMsg(error.message);
    return error;
  }
}
