import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgetPass.css';

const Forget = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }
    // Mock flow: In real use, handle API call here
    alert('Password reset link sent to your email.');
    navigate('/login');
  };

  return (
    <div className="forget-container">
      <form className="forget-form" onSubmit={handleSubmit}>
        <h2 className="forget-title">Forgot Password?</h2>
        <p className="forget-description">Enter your registered email to receive a reset link.</p>
        <input
          type="email"
          placeholder="Email Address"
          className="forget-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="forget-btn">Send Reset Link</button>
        <p className="back-login" onClick={() => navigate('/login')}>Back to Login</p>
      </form>
    </div>
  );
};

export default Forget;
