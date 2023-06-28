import {  Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  
  const userModel = localStorage.getItem("userModel");
  const userRole = userModel.userRole;
  if(userRole==="user"){
    console.log("Protected route children")
  }

  return (
    userRole==="user"? <Outlet/> :  <Navigate to="/user/login" replace />
  )

}
export default ProtectedRoute;