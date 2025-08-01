import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaTimes
} from "react-icons/fa";
import { IoPerson, IoMail, IoLockClosed } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import "./Register.css";
import RegImg from "../../assets/Register.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);
  const handleClose = () => navigate("/");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Perform registration logic here
      alert("Registration successful!");
      setFormData({ name: "", email: "", password: "", phone: "" });
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="register-modal-overlay">
      <div className="register-modal">
        <button className="register-close" onClick={handleClose}>
          <FaTimes />
        </button>

        <div className="register-grid">
          {/* Left Image */}
          <div className="register-img-section">
            <img alt="Register" className="register-side-img" src={RegImg} />
          </div>

          {/* Right Form */}
          <form className="register-form-section" onSubmit={handleSubmit} noValidate>
            <h3>Create Account</h3>

            <div className="input-group">
              <IoPerson className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="register-input"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="input-group">
              <IoMail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="register-input"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="input-group">
              <IoLockClosed className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="register-input"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="button" className="toggle-password" onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="input-group">
              <MdPhone className="input-icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="register-input"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <button type="submit" className="register-btn">REGISTER</button>

            <p className="login-link">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
