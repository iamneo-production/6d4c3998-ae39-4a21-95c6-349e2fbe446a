import { useNavigate } from 'react-router-dom';
import './UserNavbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigationbar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <Link className='logout'>Log out</Link>
      </div>
    </>
  );
}

export default Navigationbar;
