import siteIcon from '../assets/cpu.png';
import React from 'react';
import './Header.css'; 
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-left">
        <ul>
          <Link to={'/askai'}><li>Ask AI</li></Link>
          <Link to={'/editors'}><li>Editor's Choice</li></Link>
          <Link to={'/builder'}><li>PC Builder</li></Link>
        </ul>
      </nav>
      <Link to='/'>
        <div className="header-right">
        <img src={siteIcon} alt="Site Icon" className="site-icon" />
        <span className="site-name">PC Build Guide</span>
      </div>      
      </Link>
    </header>
  );
};

export default Header;