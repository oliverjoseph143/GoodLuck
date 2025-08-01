import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from './../../assets/main-logo.jpg';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark px-3 py-2">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
              src={logo} 
              alt="Logo" 
              width="40" 
              height="30" 
              className="me-2"
              style={{ objectFit: 'cover' }}
            />
            <span className="ms-2">
              Good<span style={{ color: 'var(--border-green)' }}>Luck</span> Casino
            </span>
          </Link>


          <div className="d-flex gap-3 align-items-center">
            <Link to="/login" className="btn btn-login color">LOGIN</Link>
            <Link to="/register" className="btn btn-register color">REGISTER</Link>
            <Link to="/otp" className="btn btn-otp color">OTP</Link>

            {/* Menu Icon */}
            <button className="menu-icon-btn" onClick={() => setMenuOpen(true)}>
              <AiOutlineMenu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Side Popup Menu */}
      <div className={`side-popup ${menuOpen ? 'open' : ''}`}>
        <div className="popup-header">
        <AiOutlineClose size={24} className="popup-close" onClick={() => setMenuOpen(false)} />
        </div>
        <ul className="popup-links">
          <li><Link to="/vip">VIP</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/disconnection">Disconnection Policy</Link></li>
          <li><Link to="/promotions">Promotions</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className="popup-backdrop" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Bottom Navigation */}
      <nav className="bottomNavbar navbar navbar-expand bottom-nav navbar-green">
        <div className="container-fluid">
          <div className="sec-header navbar-collapse justify-content-center mt-2 mt-md-0">
            <ul className="navbar-nav row row-cols-2 row-cols-sm-3 row-cols-md-6 text-center w-100">
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link text-white d-flex flex-column align-items-center">
                  <i className="fas fa-chart-line gold mb-1 fs-4"></i>
                  <span>EXCHANGE</span>
                </a>
              </li>
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link text-white d-flex flex-column align-items-center">
                  <i className="fas fa-dumbbell gold mb-1 fs-4"></i>
                  <span>SPORTSBOOK</span>
                </a>
              </li>
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link text-white d-flex flex-column align-items-center">
                  <i className="fas fa-dice gold mb-1 fs-4"></i>
                  <span>LIVE CASINO</span>
                </a>
              </li>
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link text-white d-flex flex-column align-items-center">
                  <i className="fas fa-coins gold mb-1 fs-4"></i>
                  <span>SLOTS</span>
                </a>
              </li>
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link text-white d-flex flex-column align-items-center">
                  <i className="fas fa-trophy gold mb-1 fs-4"></i>
                  <span>TOURNAMENTS</span>
                </a>
              </li>
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link text-white d-flex flex-column align-items-center">
                  <i className="fas fa-bullhorn gold mb-1 fs-4"></i>
                  <span>PROMOTIONS</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
