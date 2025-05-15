import React, { useState } from 'react';
import './SellerPostAC.css';

function SellerPostAC() {
  const [photos, setPhotos] = useState([null, null, null]);
  const [selectedOwner, setSelectedOwner] = useState(null);

  const handlePhotoChange = (index, event) => {
    const newPhotos = [...photos];
    newPhotos[index] = event.target.files[0];
    setPhotos(newPhotos);
  };

  const handleOwnerSelect = (owner) => {
    setSelectedOwner(owner);
  };

  return (
    <div className="seller-form-container">
      <h2>Post Your <span style={{ color: "blue" }}>Old AC</span></h2>
      <form className="seller-form">
        <label>Write Title</label>
        <input type="text" placeholder="write Heading Here" />

        <label>Write Description</label>
        <textarea rows="4" placeholder="write Description here" />

        <div className="form-row">
          <div className="form-group">
            <label>Select Brand</label>
            <select>
              <option>Haier</option>
              <option>LG</option>
              <option>Voltas</option>
              <option>Sansui</option>
              <option>Samsung</option>
            </select>
          </div>

          <div className="form-group">
            <label>Enter Manufacturing Year</label>
            <input type="number" placeholder="Enter year" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Select Type</label>
            <select>
              <option>Split AC</option>
              <option>Window AC</option>
              <option>Portable AC</option>
              <option>Inverter AC</option>
            </select>
          </div>

          <div className="form-group">
            <label>Enter Dimensions</label>
            <input type="text" placeholder="Enter Dimensions of your AC" />
          </div>
        </div>
        <div className="form-row owners-row">
          <label className="sellerpostac-form-owner">No. of Owners (select one of Them)</label>
          <div className="owner-buttons">
            {["1st", "2nd", "3rd", "4+"].map((owner) => (
              <button
                type="button"
                key={owner}
                className={selectedOwner === owner ? 'selected' : ''}
                onClick={() => handleOwnerSelect(owner)}
              >
                {owner}
              </button>
            ))}
          </div>
        </div>

        <label>Set a Price</label>
        <input type="text" placeholder="₹ _ _ _ _" />

        <label>Add up to 3 photos of your AC</label>
        <div className="photo-boxes">
          {photos.map((photo, index) => (
            <label key={index} className="photo-box">
              {photo ? (
                <span title={photo.name}>
                  {photo.name.length > 10 ? photo.name.slice(0, 10) + '...' : photo.name}
                </span>
              ) : (
                `Pic ${index + 1}`
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoChange(index, e)}
              />
            </label>
          ))}
        </div>

        <div className="submit-section">
          <button type="submit">Submit Now</button>
        </div>
      </form>
    </div>
  );
}

export default SellerPostAC;
