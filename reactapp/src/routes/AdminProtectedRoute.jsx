import {  Navigate, Outlet } from 'react-router-dom';

function AdminProtectedRoute() {
  
  const userModel = localStorage.getItem("userModel");
  const userRole = userModel.userRole;

  return (
    userRole==="admin"? <Outlet/> :  <Navigate to="/user/login" replace />
  )

}
export default AdminProtectedRoute;

