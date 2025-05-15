import React, { useState, useEffect } from 'react';
import './SellerProfile.css';
import { FaPencilAlt } from 'react-icons/fa';
import profilelistingimg from './profile-listing-card.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';


function SellerProfile() {
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    mobile: '9876543210',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setIsEditable(true);
  };

  const handleSave = () => {
    console.log("Saved:", userData);
    setIsEditable(false);
  };

  return (
    <div className="seller-profile">
      <div className="profile-form">
        <h2 className='profie-form-heading'>Your Profile</h2>
      <div className="form-field">
        <label>
          Your Name
          <FontAwesomeIcon icon={faPencil} className="edit-icon" />
        </label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          readOnly={!isEditable}
        />
      </div>
      <div className="form-field">
        <label>
          Email ID
          <FontAwesomeIcon icon={faPencil} className="edit-icon" />
        </label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          readOnly={!isEditable}
        />
      </div>
      <div className="form-field">
        <label>
          Your Mobile Number
          <FontAwesomeIcon icon={faPencil} className="edit-icon" />x
        </label>
        <input
          type="text"
          name="mobile"
          value={userData.mobile}
          onChange={handleChange}
          readOnly={!isEditable}
        />
      </div>

        {isEditable && (
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        )}
      </div>
      
      <div className='profile-listed-title'>
        <h2>Your Listed ACs</h2>
        <span><a href='/'>View All  </a></span>
      </div>
      <div className="ac-cards-section">
        {[1, 2, 3].map((item) => (
          <div className="ac-card" key={item}>
            <img src={profilelistingimg} alt="AC" />
            <div className="ac-details">
              <strong>Voltas</strong>
              <span>Voltas 183V DZU 1.5 Ton</span>
            </div>
          </div>
        ))}
      </div>
      <div className="subscription-section">
        <div className="subscription-text">Your Current Subscription</div>
        <button className="upgrade-btn">Upgrade Now</button>
      </div>
      <div className="no-subscription">
        -- No Subscription Purchased Yet --
      </div>


      <div className="vip-section">
        <div className="vip-left">
          <h3>You’re currently a VIP member</h3>
          <p>Get the price with zero hassle and more benefits only with VIP membership.</p>
        </div>
        <div className="vip-right">
          <button className="vip-button">Valid till 28 March 2026</button>
        </div>
      </div>
    </div>
  );
}

export default SellerProfile;
