// import siteIcon from '../assets/cpu.png';
// import React from 'react';
// import './Header.css'; 
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="header">
//       <nav className="header-left">
//         <ul>
//           <Link to={'/askai'}><li>Ask AI</li></Link>
//           <Link to={'/editors'}><li>Editor's Choice</li></Link>
//           <Link to={'/builder'}><li>PC Builder</li></Link>
//         </ul>
//       </nav>
//       <Link to='/'>
//         <div className="header-right">
//         <img src={siteIcon} alt="Site Icon" className="site-icon" />
//         <span className="site-name">PC Build Guide</span>
//       </div>      
//       </Link>
//     </header>
//   );
// };

// export default Header;


import React from 'react'
import './Header.css'
import searchIcon from '../assets/search.png'
import logo from '../assets/cpu.png'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='navbar'>
    <img src={logo} alt='logo icon' className='logo'/>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/askai'}><li>Ask AI</li></Link>
        <Link to={'/builder'}><li>PC Builder</li></Link>
        <Link to={'/editors'}><li>Editor's Choice</li></Link>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search'></input>
        <img src={searchIcon} alt='search icon'/>
      </div>
    </div>
  )
}

export default Header;
