import React, { useState, useEffect } from 'react';
import './Popup.css';
import homePageCard from './homepage-card.png';

const countryCodes = [
  { code: '+91', country: 'India' },
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  // Add more country codes as needed
];

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState('initial');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleContactUs = () => {
    setStage('contact');
  };

  const handleGetOtp = async () => {
    setIsLoading(true);
    // Simulate API call to send OTP
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setStage('otp');
  };

  const handleVerify = async () => {
    setIsLoading(true);
    // Simulate OTP verification
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setStage('success');
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-modal">
        <button onClick={closePopup} className="popup-close-button">
          ✕
        </button>

        {stage === 'initial' && (
          <div className="popup-content">
            <div className='popup1-left'>
              <div className='popup1-left1'>
                <img
                src={homePageCard}
                alt="Popup Banner"
                className="popup-image" />
              </div>
              <h2>AC <span style={{color:"blue"}}> Installation</span></h2>
              <div className='popup1-left2'>
                <div className='popup1-left2-1'>
                  <div className='popup1-left2-1-left'> 
                    <h3>Split AC Service </h3>
                    <p>starts from $900 </p>
                  </div>
                  <div className='popup1-left2-1-right'> <button className='popup-adding-btn'> + Add </button></div>
                </div>
                <div className='popup1-left2-2'>
                  <div className='popup1-left2-2-left'>
                    <h3>Window AC Service </h3>
                    <p>starts from $800 </p>
                  </div>
                  <div className='popup1-left2-2-right'> <button className='popup-adding-btn'> + Add </button></div>
                </div>
              </div>
            </div>
            <div className='popup1-right'>
              <h3>Increase efficiency of your get improved cooling of your instantly with no extra cost with professionals.</h3>
              <h3>Services included : </h3>
              <ul>
                <li><p>pre job inspection : enhanced servicing</p></li>
                <li><p>pre job inspection : enhanced servicing pre job inspection : enhanced servicing pre job inspection : enhanced servicing</p></li>
                <li><p>pre job inspection : enhanced servicing</p></li>
              </ul>

              <h3>Services Does not includes : </h3>
              <ul>
                <li><p>pre job inspection : enhanced servicing pre job inspection : enhanced servicing pre job inspection : enhanced servicing pre job inspection : enhanced servicing </p></li>
                <li><p>pre job inspection : enhanced servicing pre job inspection : enhanced servicing pre job inspection : enhanced servicing</p></li>
                <li><p>pre job inspection : enhanced servicing pre job inspection : enhanced servicing  pre job inspection : enhanced servicing </p></li>
              </ul>

              <div className='popup1-right-bottom'>
                <div className='popup1-right-bottom-left'><button>Explore Other Services</button></div>
                <div className='popup1-right-bottom-right'><button onClick={handleContactUs}>Contact Us</button></div>
              </div>

            </div>
          </div>
        //   <div className="popup-content">
        //   <img
        //     src={homePageCard}
        //     alt="Popup Banner"
        //     className="popup-image"
        //   />
        //   <h2 className="popup-title">Welcome to Our Website!</h2>
        //   <p className="popup-text">
        //     Discover amazing features and join our community today.
        //   </p>
        //   <button onClick={handleContactUs} className="popup-button">
        //     Contact Us
        //   </button>
        // </div>
        )}

        {stage === 'contact' && (
          <div className="popup-content">
            <div><img
              src={homePageCard}
              alt="Contact Banner"
              className="popup-image"
            />
            <h2 className="popup-subtitle">Enter Your Details</h2>
            <div className="popup-form-group">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="popup-select"
              >
                {countryCodes.map(({ code, country }) => (
                  <option key={code} value={code}>
                    {country} ({code})
                  </option>
                ))}
              </select>
              <input
                type="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
                className="popup-input"
              />
            </div>
            <button
              onClick={handleGetOtp}
              disabled={isLoading || !phoneNumber}
              className={`popup-button ${isLoading || !phoneNumber ? 'popup-button-disabled' : ''}`}
            >
              {isLoading ? 'Sending...' : 'Get OTP'}
            </button>
            </div>
          </div>
        )}

        {stage === 'otp' && (
          <div className="popup-content">
            <div>
              <img
                src={homePageCard}
                alt="OTP Banner"
                className="popup-image"
              />
              <h2 className="popup-subtitle">Verify OTP</h2>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 4-digit OTP"
                maxLength="4"
                className="popup-input popup-input-full"
              />
              <button
                onClick={handleVerify}
                disabled={isLoading || otp.length !== 4}
                className={`popup-button ${isLoading || otp.length !== 4 ? 'popup-button-disabled' : ''}`}
              >
                {isLoading ? 'Verifying...' : 'Verify & Get Callback'}
              </button>
            </div>
          </div>
        )}

        {stage === 'success' && (
          <div className="popup-content">
            <div>
              <img
                src={homePageCard}
                alt="Success Banner"
                className="popup-image"
              />
              <h2 className="popup-subtitle">Thank You!</h2>
              <p className="popup-text">
                Thanks for submitting. We'll call you shortly.
              </p>
              <button onClick={closePopup} className="popup-button">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;