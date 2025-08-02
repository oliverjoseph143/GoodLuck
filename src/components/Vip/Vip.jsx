import React from 'react';
import './Vip.css';
import { BsFillStarFill } from 'react-icons/bs';

const Vip = () => {
  return (
    <div className="vip-container">
      <div className="vip-card">
        <div className="vip-avatar-placeholder">VR</div>
        <h2 className="vip-name">Random-Name</h2>
        <p className="vip-title">Premium Member</p>
        <p className="vip-id">ID: #VIP2025</p>
        <p className="vip-since">Member Since: Jan 2024</p>
        <div className="vip-badge">
          <BsFillStarFill className="vip-icon" />
          <span>Gold Badge</span>
        </div>
      </div>
    </div>
  );
};

export default Vip;
