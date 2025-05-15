import React, { useState } from 'react';
import './ServicePopup.css';

const ServicePopup = ({ isOpen, closePopup }) => {
  if (!isOpen) return null; // Close the popup if it's not open

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>X</button>
        <h2>Service Popup</h2>
        <p>Here you can add your service details or a contact form.</p>
      </div>
    </div>
  );
};

export default ServicePopup;
