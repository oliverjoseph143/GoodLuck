import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our platform! We are a passionate team dedicated to delivering high-quality web experiences.
          Our mission is to build user-friendly and visually stunning applications that solve real-world problems.
        </p>
        <p className="about-description">
          Whether you're here to explore services, learn something new, or just looking around, we’re glad you stopped by.
          We believe in continuous innovation, performance, and customer satisfaction.
        </p>
        <p className="about-highlight">Thank you for being part of our journey!</p>
      </div>
    </div>
  );
};

export default AboutUs;
