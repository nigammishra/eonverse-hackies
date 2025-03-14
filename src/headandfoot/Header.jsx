
import React, { useState } from 'react';
import './header.css'; // Assuming you will create a CSS file for styling
import { Link } from 'react-router-dom';
import logo from '../images/hackies-logo.png'; // Import the logo image

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleNavTriggerClick = () => {
    setIsActive(!isActive);
    console.log("Clicked menu");
    setShowList(!showList);
  };

  return (
    <nav className={`nav ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>
        <div id="mainListDiv" className={`main_list ${showList ? 'show_list' : ''}`}>
          <ul className="navlinks">
            <li>
              <Link to="/">Eonverse</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/fetures">Features</Link>
            </li>
            <li>
              <Link to="/techStack">Tech Stack</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="signin-btn">
              <Link to="/signin">Sign In</Link> {/* Link to your sign-in page */}
            </li>
          </ul>
        </div>
        <span className="navTrigger" onClick={handleNavTriggerClick}>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
};

export default Header;

