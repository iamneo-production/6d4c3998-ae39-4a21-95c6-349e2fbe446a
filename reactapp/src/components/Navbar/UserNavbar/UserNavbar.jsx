import { useNavigate} from 'react-router-dom';
import './UserNavbar.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';


function Navigationbar(){
    const navigate = useNavigate();
    const [activeTab,setActiveTab]= useState(1);
    const handleTabClick=(tabIndex)=>{
        setActiveTab(tabIndex);
    }
    return(
        <>
        
        <div className="main">
            <h1>Education Loan</h1>
            <Link className='logout'>Log out</Link>
            <div className="tabs">
                <ul>
                    <li onClick={() => {navigate('/ApplyForm');handleTabClick(1);}} className={activeTab === 1 ? 'active' : ''}>Apply Loan</li>
                    <li onClick={() => {navigate('/LoanStatus');handleTabClick(2);}} className={activeTab === 2 ? 'active' : ''}>Loan Status</li>
                    <li onClick={() => {navigate('/Profile');handleTabClick(3);}} className={activeTab === 3 ? 'active' : ''}>Profile</li>
                </ul>
            </div>
           
        </div>
        
        </>
    );
}

export default Navigationbar;