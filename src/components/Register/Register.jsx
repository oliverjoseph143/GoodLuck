import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaTimes } from "react-icons/fa";
import { IoPerson, IoMail, IoLockClosed } from "react-icons/io5";
import "./Register.css";
import RegImg from '../../assets/Register.jpg'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePassword = () => setShowPassword(!showPassword);

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="register-modal-overlay">
      <div className="register-modal">
        <button className="register-close" onClick={handleClose}>
          <FaTimes />
        </button>

        <div className="register-grid">
          {/* Left Column - Image */}
          <div className="register-img-section">
            <img
              alt="Register"
              className="register-side-img"
              src={RegImg}
            />
          </div>

          {/* Right Column - Register Form */}
          <div className="register-form-section">
            <h3>Create Account</h3>

            <div className="input-group">
              <IoPerson className="input-icon" />
              <input
                type="text"
                placeholder="Full Name"
                className="register-input"
              />
            </div>

            <div className="input-group">
              <IoMail className="input-icon" />
              <input
                type="email"
                placeholder="Email Address"
                className="register-input"
              />
            </div>

            <div className="input-group">
              <IoLockClosed className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="register-input"
              />
              <button className="toggle-password" onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button className="register-btn">REGISTER</button>

            <div className="social-register">
              <span>-or-</span>
              <div className="social-icons">
                <button><FaGoogle /></button>
                <button><FaFacebookF /></button>
              </div>
            </div>

            <p className="login-link">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
