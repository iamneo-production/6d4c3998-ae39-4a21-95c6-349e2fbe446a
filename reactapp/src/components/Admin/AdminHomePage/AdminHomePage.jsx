import React,{useContext,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import UserContext from '../../../context/UserContext';

export default function AdminHomePage() {

  const { userModel ,setUserModel} = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userModel'));
    if (storedUser && storedUser.userRole === 'user') {
      localStorage.removeItem("userModel");
      console.log("token removal is done by admin home")
      setUserModel(null)
      navigate('/user/login');
    }
  }, [navigate]);


  function handleLogout() {
    setUserModel(null);
    // localStorage.removeItem("token");
     localStorage.removeItem("userModel");
    navigate("/user/login");
  }

  return (
    <div>
      <h1> Admin home</h1>
      <p>User email: {userModel.email}</p>
      <p>User password: {userModel.password}</p>
      <p>Your role : {userModel.userRole}</p>
    
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
