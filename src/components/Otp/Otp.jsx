import React, { useState, useRef } from 'react';
import './Otp.css';

const Otp = () => {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);

  const inputsRef = useRef([]);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const sendOtp = () => {
    if (phone.length === 10) {
      setOtpSent(true);
      setOtp(['', '', '', '']);
      setTimeout(() => inputsRef.current[0]?.focus(), 100);
      alert(`OTP sent to +91-${phone} (Simulated)`);
    } else {
      alert('Enter a valid 10-digit phone number');
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, '');
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value[0];
    setOtp(newOtp);

    if (index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 4) {
      alert('Please enter complete 4-digit OTP');
    } else {
      alert(`Entered OTP: ${enteredOtp}`);
      // Replace with actual OTP verification logic
    }
  };

  return (
    <div className="otp-container">
      <h2>OTP Login</h2>

      {!otpSent ? (
        <>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={handlePhoneChange}
            className="phone-input"
            maxLength={10}
          />
          <button onClick={sendOtp} className="submit-btn">Get OTP</button>
        </>
      ) : (
        <>
          <p className="otp-info">Enter the OTP sent to +91-{phone}</p>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="otp-box"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
              />
            ))}
          </div>
          <button onClick={handleVerify} className="submit-btn">Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default Otp;
