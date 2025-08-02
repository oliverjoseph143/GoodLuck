import React from "react";
import "./Footer.css";
import { FaInstagram, FaPinterest, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

// Imported payment logos
import Logo1 from './../../assets/Applepay.png';
import Logo2 from './../../assets/Gpay.png';
import Logo3 from './../../assets/Payonner.png';
import Logo4 from './../../assets/Paypal.png';
import Logo6 from './../../assets/Rupay.png';
import Logo7 from './../../assets/Icic.png';
import Logo8 from './../../assets/Hdfc.png';
import Logo11 from './../../assets/Banker.png';


// Game Providers logos
import Glogo1 from './../../assets/XpG.png';
import Glogo4 from './../../assets/Redtiger.png';
import Glogo5 from './../../assets/Bestsoft.png';
import Glogo2 from './../../assets/Yggdrasil.png';
import Glogo3 from './../../assets/GamesSoft.png';
import Glogo6 from './../../assets/izuki.png';
import Glogo7 from './../../assets/Diacover.jpg';
import Glogo8 from './../../assets/Evolution.jpg';


const Footer = () => {
  return (
    <footer className="footer-container container-fluid px-4 py-5">
      <div className="row text-white text-start g-4">

        {/* Logo & Description */}
        <div className="col-md-3">
          <h4 className="fw-bold">GoodLuck<span className="col-yellow"> Casino</span></h4>
          <p>India's Best Online Casino Slot & Live Games</p>
          <p className="small">18+ Be Responsible</p>
        </div>

        {/* Menu */}
        <div className="col-md-3">
          <h5 className="col-yellow">Menu</h5>
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
          <h5 className="col-yellow">Quick Links</h5>
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
          <h5 className="col-yellow">Get In Touch</h5>
          <div className="footer-icons mb-2 d-flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterest /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaXTwitter /></a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
          <p>Toll Number: <strong>1800 103 4212</strong></p>
        </div>
      </div>

    <div className="text-center mt-5">
  <h5 className="col-yellow">Game Providers</h5>
  <div className="provider-logos d-flex justify-content-center flex-wrap mt-3 gap-3">
    <img src={Glogo1} alt="XpG" className="provider-img" />
    <img src={Glogo2} alt="Yggdrasil" className="provider-img" />
    <img src={Glogo4} alt="Red Tiger" className="provider-img" />
    <img src={Glogo5} alt="Betsoft" className="provider-img" />
    <img src={Glogo3} alt="Gamesoft" className="provider-img" />
    <img src={Glogo6} alt="Gamesoft" className="provider-img" />
    <img src={Glogo7} alt="Gamesoft" className="provider-img" />
    <img src={Glogo8} alt="Gamesoft" className="provider-img" />


  </div>
</div>

      {/* Payment Methods */}
      <div className="text-center mt-5">
        <h5 className="col-yellow">Payment Methods</h5>
        <div className="payment-logos d-flex justify-content-center flex-wrap mt-3 gap-3">
          <img src={Logo1} alt="Apple Pay" className="payment-img" />
          <img src={Logo2} alt="Google Pay" className="payment-img" />
          <img src={Logo3} alt="Payoneer" className="payment-img" />
          <img src={Logo4} alt="Paypal" className="payment-img" />
          <img src={Logo6} alt="Rupay" className="payment-img" />
          <img src={Logo7} alt="Icic" className="payment-img" />
          <img src={Logo8} alt="Hdfc" className="payment-img" />
          <img src={Logo11} alt="Banker" className="payment-img" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom d-flex flex-wrap justify-content-center align-items-center gap-3 mt-5 pt-3 border-top text-white-50 small">
        <span>© 2025 Goodluck. All Rights Reserved.</span>
        <span>Terms & Conditions</span>
        <span>AML & KYC</span>
        <span>Responsible Gambling</span>
        <span>Privacy Policy</span>
        <span>Disconnection Policy</span>
      </div>
    </footer>
  );
};

export default Footer;