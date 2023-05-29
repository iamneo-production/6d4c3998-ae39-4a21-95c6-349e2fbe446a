
import { BASE_URL } from "./utils";


export async function signUpUser(
  email,
  mobileNumber,
  password,
  userType,
  userName,
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

      alert("Signup failed",res.status);
      throw new Error("Signup failed");
    }

    const data = await res.json();
   console.log(data)
   localStorage.setItem('email', email);
   localStorage.setItem('password', password);
    if (userType === "admin") {
      window.location.href = "/admin/login";
    } else {
      window.location.href = "/user/login";
    }
    return;
  } catch (error) {

    console.log(error)
   
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
      
      if(res.status===401) throw new Error(`${res.status} Invalid Credentials`);
      else throw new Error(`${res.status} Error`)
    }

    return res;
  } catch (error) {
    alert(error.message)
    return
  }
}
