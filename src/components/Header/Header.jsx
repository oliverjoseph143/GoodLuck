import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <>
      {/* Top Navbar */}
      <nav className=" navbar navbar-expand-lg navbar-dark px-3 py-2">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <CgProfile />
            <span className="ms-2">
              Good<span style={{ color: 'var(--border-green)' }}>Luck</span>
            </span>
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler border border-success"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleItems"
            aria-controls="navbarToggleItems"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-white"></i>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarToggleItems">
            <ul className="navbar-nav align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <Link to="/login" className="btn btn-login">LOGIN</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="btn btn-register ms-lg-2 mt-2 mt-lg-0">REGISTER</Link>
              </li>
              <li className="nav-item">
                <Link to="/otp" className="icon-btn ms-lg-2 mt-2 mt-lg-0 d-flex flex-column align-items-center">
                  <small>OTP</small>
                </Link>
              </li>
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <CgProfile className='profile'/>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <nav className="bottomNavbar navbar navbar-expand bottom-nav navbar-green ">
        <div className="container-fluid">
          {/* Bottom Toggle Button */}
          <button
            className="navbar-toggler mx-auto border border-success"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bottomNavbar"
            aria-controls="bottomNavbar"
            aria-expanded="false"
            aria-label="Toggle bottom nav"
          >
            <i className="fas fa-bars text-white"></i> MENU
          </button>

          {/* Bottom Collapsible Items */}
         <div className="   sec-header collapse navbar-collapse justify-content-center mt-2 mt-md-0" id="bottomNavbar">
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
