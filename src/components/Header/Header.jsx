import React from 'react';
import './Header.css'; // Make sure you have matching styles here
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark px-3 py-2">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="https://via.placeholder.com/32x32" alt="Logo" />
            <span className="ms-2">
              Kheloz<span style={{ color: 'var(--border-green)' }}>Match</span>
            </span>
          </a>

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
                <button className="btn btn-login">LOGIN</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-register ms-lg-2 mt-2 mt-lg-0">REGISTER</button>
              </li>
              <li className="nav-item">
                <button className="icon-btn ms-lg-2 mt-2 mt-lg-0 d-flex flex-column align-items-center">
                  <i className="fas fa-mobile-alt"></i>
                  <small>OTP</small>
                </button>
              </li>
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <img src="https://flagcdn.com/w20/in.png" alt="EN" width="20" height="15" />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <nav className="navbar navbar-expand-md bottom-nav navbar-dark py-2">
        <div className="container">
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
          <div className="collapse navbar-collapse justify-content-center mt-2 mt-md-0" id="bottomNavbar">
            <ul className="navbar-nav row row-cols-2 row-cols-sm-3 row-cols-md-6 text-center w-100">
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link">
                  <i className="fas fa-chart-line"></i> EXCHANGE
                </a>
              </li>
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link">
                  <i className="fas fa-dumbbell"></i> SPORTSBOOK
                </a>
              </li>
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link">
                  <i className="fas fa-dice"></i> LIVE CASINO
                </a>
              </li>
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link">
                  <i className="fas fa-coins"></i> SLOTS
                </a>
              </li>
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link">
                  <i className="fas fa-trophy"></i> TOURNAMENTS
                </a>
              </li>
              <li className="nav-item col mb-2">
                <a href="#" className="nav-link">
                  <i className="fas fa-bullhorn"></i> PROMOTIONS
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
