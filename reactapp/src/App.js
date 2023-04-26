import {Routes,Route} from "react-router-dom"
import Login from "./components/Auth/Login/Login"
import Signup from "./components/Auth/Signup/Signup";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes> 
         {/* PUBLIC ROUTE */} 
         <Route path="/" element={<Login />} /> 
  
         {/* USER ROUTES */} 
         <Route path="/user/signup" element={<Signup />} /> 
         {/* <Route path="/user/applyloan" element={<Customerapplyloan/>}/> */} 
         <Route path="/user/login"  element= { <Login/>} /> 
  
         {/* ADMIN ROUTES */} 
  
         <Route path="/admin/login"  element= { <Login/>} /> 
  
  
     </Routes>
    </div>
  );
}

export default App;
