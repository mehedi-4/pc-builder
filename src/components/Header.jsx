import siteIcon from '../assets/cpu.png';
import React from 'react';
import './Header.css'; 
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-left">
        <ul>
          <li><a href="#askai">Ask AI</a></li>
          <li><a href="#editors-choice">Editor's Choice</a></li>
          <li><a href="#Builder">PC Builder</a></li>
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