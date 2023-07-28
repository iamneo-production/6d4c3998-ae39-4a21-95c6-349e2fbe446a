import React, { useEffect,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import UserContext from "../../../context/UserContext"

export default function Customerprofile() {
    
    const { userModel,setUserModel } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('userModel'));
      if (storedUser && storedUser.userRole === 'admin') {
        localStorage.removeItem("userModel");
      console.log("token removal is done by admin home")
      setUserModel(null)
        console.log("token removal is done by user home")
        navigate('/user/login');
      }
    }, [navigate]);
  
  
  return (
     <div>
      <h1> Customer Profile </h1>
      {userModel ? (
        <div>
          <p>User email: {userModel.email}</p>
          <p>Your role: {userModel.userRole}</p>
          {userModel.mobileNumber && (
            <p>Mobile number: {userModel.mobileNumber}</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}