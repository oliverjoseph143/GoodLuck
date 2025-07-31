import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaTimes } from "react-icons/fa";
import { IoPerson, IoLockClosed } from "react-icons/io5";
import "./Login.css";
import LoginImg from '../../assets/Login.jpg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePassword = () => setShowPassword(!showPassword);

  const handleClose = () => {
    navigate("/"); // Go back to homepage
  };

  const handleLogin = () => {
    // Add your login logic here
    alert("Login clicked!");
    // Navigate to dashboard or another page after successful login
    // navigate("/dashboard");
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button className="login-close" onClick={handleClose}>
          <FaTimes />
        </button>

        <div className="login-grid">
          {/* Left Section */}
          <div className="login-img-section">
            <img
              alt="Welcome"
              src={LoginImg} // Replace with actual image path
              className="login-side-img"
            />
          </div>

          {/* Right Section - Form */}
          <div className="login-form-section">
            <h3>Login</h3>

            <div className="input-group">
              <IoPerson className="input-icon" />
              <input
                type="text"
                placeholder="Username / Email / Phone"
                className="login-input"
              />
            </div>

            <div className="input-group">
              <IoLockClosed className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="login-input"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button className="login-btn" onClick={handleLogin}>
              LOGIN
            </button>

            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>

            <div className="social-login">
              <span>-or-</span>
              <div className="social-icons">
                <button type="button"><FaGoogle /></button>
                <button type="button"><FaFacebookF /></button>
              </div>
            </div>

            <p className="signup-link">
              New? <Link to="/register">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
