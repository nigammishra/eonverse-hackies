import React, { useState } from "react";
import "./header.css"; // Assuming you will create a CSS file for styling
import { Link } from "react-router-dom";
import logo from "../images/hackies-logo.png"; // Import the logo image

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleNavTriggerClick = () => {
    setIsActive(!isActive);
    setShowList(!showList);
    setShowOffcanvas(!showOffcanvas);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <div>
      <nav className={`nav ${isActive ? "active" : ""}`}>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>
          <div
            id="mainListDiv"
            className={`main_list ${showList ? "show_list" : ""}`}
          >
            <ul className="navlinks">
              <li>
                <Link to="/eonverse-hackies/">Eonverse</Link>
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
                <Link to="/signin">Sign In</Link>
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

      {/* Offcanvas Navbar */}
      <div
        className={`offcanvas offcanvas-end ${showOffcanvas ? "show" : ""}`}
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        style={{ visibility: showOffcanvas ? "visible" : "hidden" }}
      >
        <div className="offcanvas-header">
        <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>
          <button
            type="button"
            className="btn-close"
            onClick={handleCloseOffcanvas}
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body off-list">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li>
                <Link to="/eonverse-hackies/"  onClick={handleCloseOffcanvas}>Eonverse</Link>
              </li>
              <li>
                <Link to="/about"  onClick={handleCloseOffcanvas}>About</Link>
              </li>
              <li>
                <Link to="/fetures" onClick={handleCloseOffcanvas}>Features</Link>
              </li>
              <li>
                <Link to="/techStack" onClick={handleCloseOffcanvas}>Tech Stack</Link>
              </li>
              <li>
                <Link to="/demo" onClick={handleCloseOffcanvas}>Demo</Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleCloseOffcanvas}>Contact</Link>
              </li>
              <li className="signin-btn">
                <Link to="/signin" onClick={handleCloseOffcanvas}>Sign In</Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
