import { useNavigate } from 'react-router-dom';
import './UserNavbar.css';
import { useState,useContext } from 'react';
import { Link,NavLink } from 'react-router-dom';
import UserContext from '../../../context/UserContext';

function Navigationbar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userModel, setUserModel } = useContext(UserContext);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function handleLogout() {
    setUserModel(null);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userModel");
    navigate("/user/login");
  }

  return (
    <>
      <div className={`main ${isMenuOpen ? 'open' : ''}`}>
        <h1>Education Loan</h1>
        <div className="menu-icon" onClick={handleMenuClick}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <div className={`tabs ${isMenuOpen ? 'open' : ''}`}>

      
          <ul>
            <li onClick={() => { navigate('/user/home'); handleTabClick(1); }} className={activeTab === 1 ? 'active' : ''}>Apply Loan</li>
            <li onClick={() => { navigate('/user/home/loanstatus'); handleTabClick(2); }} className={activeTab === 2 ? 'active' : ''}>Loan Status</li>
            <li onClick={() => { navigate('/user/home/profile'); handleTabClick(3); }} className={activeTab === 3 ? 'active' : ''}>Profile</li>
          
          </ul>
          
        </div>
        <div onClick={handleLogout} className='logout'>Log out</div>
      </div>
    </>
  );
}

export default Navigationbar;