import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaTimes } from "react-icons/fa";
import { IoPerson, IoLockClosed } from "react-icons/io5";
import "./Login.css";
import LoginImg from '../../assets/Login.jpg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleClose = () => {
    navigate("/");
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { username: "", password: "" };

    if (!username.trim()) {
      newErrors.username = "Username / Email / Phone is required";
      valid = false;
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login successful");
      // navigate("/dashboard");
    }
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
              src={LoginImg}
              className="login-side-img"
            />
          </div>

          {/* Right Section - Form */}
          <div className="login-form-section">
            <h3>Login</h3>
            <form onSubmit={handleLogin}>

              <div className="input-group">
                <IoPerson className="input-icon" />
                <input
                  type="text"
                  placeholder="Username / Email / Phone"
                  className="login-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {errors.username && <span className="error-text">{errors.username}</span>}

              <div className="input-group">
                <IoLockClosed className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}

              <button type="submit" className="login-btn">
                LOGIN
              </button>
            </form>

            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>


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
