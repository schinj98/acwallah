import React from "react";
import "./OldListedAC.css";
import HeroSection from "frontend/src/components/HeroSection.js";
import acImage from "./ac-demo.jpeg";

function OldListedAC() {
  return (
    <div className="OldListedAC">

      <div className="OLA-heading">
        <h2>
          Old <span style={{ color: "#0055DE" }}>Listed ACs</span>
        </h2>
      </div>

{/* featured card */}
      <div className="OLA-featured">
        <div className="featured-ac-card">
          <img src={acImage} alt="AC Product" className="ac-img" />
          
          
        </div>
        <div className="OLA-featured-title">
          <div className="ac-info">
            <h2>Samsung 1.5 Ton Inverter AC</h2>
            <p>⭐⭐⭐⭐☆ </p>
          </div>
          <div className="ac-buttons">
            <div className="OLA-featured-buy-buttons"><button className="add-cart">Add to Cart</button></div>
            <div className="OLA-featured-buy-buttons"><button className="buy-now">Buy Now</button></div>
          </div>
        </div>
        <div className="offer-section">
          <div className="offer-box">Starts from ₹14,000 - Limited Offer</div>
          <div className="offer-box vip">Starts from ₹10,000 - VIP Users Only</div>
        </div>

        {/* AC Details */}
        <div className="ac-details">
          <p><strong>Brand:</strong> Samsung</p>
          <p><strong>Capacity:</strong> 1.5 Ton</p>
          <p><strong>Energy Rating:</strong> 5 Star</p>
          <p><strong>Type:</strong> Inverter Split AC</p>
        </div>

        {/* About Product */}
        <div className="about-product">
          <h3>About this item</h3>
          <ul>
            <li><strong>Split AC with best compressor: </strong>This Samsung inverter AC offers efficient cooling with minimal power
            usage. Suitable for medium-sized rooms</li>
            <li><strong>Rating of the AC: </strong>
              It is 5-star rating ensures you
              save on electricity bills while staying cool all summer.
            </li>
          </ul>
        </div>
      </div>



      {/* Full-width AC Listing Cards */}
      <div className="listing-section">
        {[1, 2, 3].map((_, index) => (
          <div className="listing-card" key={index}>
            <div className="listing-top">
              <img src={acImage} alt="AC" className="listing-img" />
              <div className="listing-details">
                <h2>Blue Star 1.5 Ton</h2>
                  <p>⭐⭐⭐⭐☆ </p>
                <div>
                  <p>starts from <strong>₹14000</strong></p>
                  <p>starts from <strong>₹14000</strong></p>
                </div>
                <ul>
                  <li><p><strong>Brand:</strong> LG</p></li>
                  <li><p><strong>Capacity:</strong> 1.2 Ton</p></li>
                  <li><p><strong>Energy Rating:</strong> 3 Star</p></li>
                </ul>
                
              </div>
              <div className="listing-buttons">
                <button className="add-cart">Add to Cart</button>
                <button className="buy-now">Buy Now</button>
              </div>
            </div>
            <div className="listing-description">
              <h2>About this item</h2>
              <ul>
                <li>
                  <strong>LG’s energy-saving </strong>AC gives you powerful performance with low noise.
                  Ideal for small rooms, this AC is built with dual inverter technology.
                </li>
                <li>
                <strong>LG’s energy-saving </strong> AC gives you powerful performance with low noise.
                  Ideal for small rooms, this AC is built with dual inverter technology.
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OldListedAC;
