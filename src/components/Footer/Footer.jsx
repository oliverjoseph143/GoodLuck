import React from "react";
import "./Footer.css";
import { FaInstagram, FaPinterest, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container container-fluid px-4 py-5">
      <div className="row text-white text-start g-4">

        {/* Logo & Description */}
        <div className="col-md-3">
          <h4 className="fw-bold">khelo24match</h4>
          <p>India's Best Online Casino Slot & Live Games</p>
          <p className="small">18+ Be Responsible</p>
        </div>

        {/* Menu */}
        <div className="col-md-3">
          <h5>Menu</h5>
          <ul className="list-unstyled">
            <li>Online Casino Games</li>
            <li>Casino Bonus & Offers</li>
            <li>Jeet Privilege</li>
            <li>Affiliate</li>
            <li>Tournaments</li>
            <li>VIP</li>
            <li>Download App</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="col-md-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>FAQ’s</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>AML & KYC</li>
            <li>Responsible Gambling</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="col-md-3">
          <h5>Get In Touch</h5>
          <div className="footer-icons mb-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterest /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaXTwitter /></a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
          <p>Toll Number: <strong>1800 103 4212</strong></p>
        </div>
      </div>

      {/* Game Providers */}
      <div className="text-center mt-5">
        <h5 className="text-white">Game Providers</h5>
        <div className="provider-logos d-flex justify-content-center flex-wrap mt-3">
          {[...Array(8)].map((_, idx) => (
            <img key={idx} src={`/images/game${idx + 1}.png`} alt={`Game${idx + 1}`} />
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="text-center mt-5">
        <h5 className="text-white">Payment Methods</h5>
        <div className="payment-logos d-flex justify-content-center flex-wrap mt-3">
          {[...Array(10)].map((_, idx) => (
            <img key={idx} src={`/images/pay${idx + 1}.png`} alt={`Pay${idx + 1}`} />
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom d-flex flex-wrap justify-content-center align-items-center gap-3 mt-5 pt-3 border-top text-white-50 small">
        <span>© 2025 khelo24match. All Rights Reserved.</span>
        <span>Terms & Condition</span>
        <span>AML & KYC</span>
        <span>Responsible Gambling</span>
        <span>Privacy Policy</span>
        <span>Disconnection Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
