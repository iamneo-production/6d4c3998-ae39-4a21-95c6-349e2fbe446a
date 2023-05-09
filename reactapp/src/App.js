import React from 'react';
import {Navigate,BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ApplyForm from './components/Customer/ApplyForm/ApplyForm';
import LoanStatus from './components/Customer/LoanStatus/LoanStatus';
import Profile from './components/Customer/Profile/Profile';
import Navigationbar from './components/Customer/Navigationbar/Navigationbar';



function App() {
  return (
    <>  
    
    <Router>
    <switch>
      <Navigationbar/>
        <Routes>
          <Route exact path="/" element={<Navigate to="ApplyForm"/>}/> 
          <Route exact path="/ApplyForm" element={<ApplyForm/>}/>
          <Route path="/LoanStatus" element={<LoanStatus/>} />
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
        </switch>
      </Router>
   
   </>
    
  );
}

export default App;