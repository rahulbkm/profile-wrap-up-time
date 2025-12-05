import React from 'react';
import { 
  FaSearch, 
  FaLightbulb, 
  FaPlus, 
  FaFilter, 
  FaCog, 
  FaQuestionCircle, 
  FaBell 
} from 'react-icons/fa';
import { HiViewGrid } from 'react-icons/hi';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <HiViewGrid className="header-icon waffle-icon" />
        <span className="header-title">Dynamics 365</span>
        <span className="header-separator">|</span>
        <span className="header-subtitle">Copilot Service admin center</span>
      </div>
      <div className="header-center">
        <span className="sandbox-label">SANDBOX</span>
      </div>
      <div className="header-right">
        <FaSearch className="header-icon" />
        <FaLightbulb className="header-icon" />
        <FaPlus className="header-icon" />
        <FaFilter className="header-icon" />
        <FaCog className="header-icon" />
        <FaQuestionCircle className="header-icon" />
        <FaBell className="header-icon" />
        <div className="user-avatar">Ca</div>
      </div>
    </header>
  );
};

export default Header;
