import './Footer.css';
import { FcShop } from 'react-icons/fc';
import { PiWhatsappLogo } from 'react-icons/pi';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FcConferenceCall } from 'react-icons/fc';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <FcShop className="FcShop" />
        <p>Ali Shop</p>
      </div>
      <ul className="fotter-links">
        <li>The Company</li>
        <li>The Products</li>
        <li>About</li>
        <li>Contart Us</li>
      </ul>
      <div className="footer-socials-icon">
        <div className="footer-icons-container">
          <PiWhatsappLogo className="icons" />
        </div>
        <div className="footer-icons-container">
          <BsFacebook className="icons" />
        </div>
        <div className="footer-icons-container">
          <FaInstagram className="icons" />
        </div>
      </div>
      <div className="footer-write">
        <hr />
        <h2>
          All rights reserved <FcConferenceCall />
        </h2>
      </div>
    </div>
  );
}

export default Footer;
