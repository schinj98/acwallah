import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logoHere from './logo.png';


const Footer = () => {
  return (
    <footer>
      <div className='footer1'>
        <div className='footer1-column1' id='footer1-col'>
          <h2>Company</h2>
          <a href='/'><strong>Home</strong></a>
          <p><strong>Description: </strong> where cutting edge technology meets visionary design. Transform your digital performance with our professional team.</p>
        </div>
        <div className='footer1-column2' id='footer1-col'>
          <h2>Follow Us</h2>
          <ul>

            <div className='footer-social' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} />
                <span >Facebook</span>
              </a>
              <a href="https://instagram.com"  target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />
                <span>Instagram</span>
              </a>
              <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} />
                <span>Twitter</span>
              </a>
            </div>
          </ul>
        </div>
        <div className='footer1-column3' id='footer1-col'>
          <div className='footer-social' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'white' }} />
                <span >Gr Flr, Sheetal Apt JC Road, Baman Rada, Mumbai, Maharashtra, 400099, India</span>
              </a>
              <a href="https://instagram.com"  target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPhone} style={{ color: 'white' }} />
                <span>Call us at +91 92 279XX XXXX</span>
              </a>
              <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} />
                <span>Mail us At noAgency@gmail.com</span>
              </a>
            </div>
          
        </div>
      </div>
      
      <div className='footer2'>
        <div className='footer2-col1'>
          <img src={logoHere} alt="ACWallah Logo" className="logo-img" />
        </div>
        <div className='footer2-col2'>
          <p>Copyright @ 2024 Brand Name | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
