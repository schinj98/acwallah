import React from "react";
import "./HeroSection.css";
import cardImage from "./hero-card-img.png";
import heroLeft from "./hero-left.png";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
        <img src={heroLeft} className="hero-img" alt="Membership Card" />
        </div>

        <div className="card-container">
          <div className="card">
              <img src={cardImage} className="card-img" alt="Membership Card" />
              
            <div className="card-details">
              <div className="card-details-left">
                <h3>VIP Membership</h3>
                <p>upto 15% discount on top of existing products</p>
              </div>
              <div className="card-details-right">
                <button
                  className="buy-now-btn"
                  onClick={() => console.log("Buy Now clicked")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-form">
  <form>
    <div className="form-group">
      <label>Full Name</label>
      <input type="text" placeholder="Full Name" />
    </div>
    <div className="form-group">
      <label>Email</label>
      <input type="email" placeholder="Email" />
    </div>
    <div className="form-group">
      <label>Phone</label>
      <input type="tel" placeholder="Phone" />
    </div>
    <div className="form-group">
      <label>Choose Service</label>
      <select>
        <option value="">Choose Service</option>
        <option value="ac-service">AC Service</option>
        <option value="ac-repair">AC Repair</option>
        <option value="ac-install">AC Installation</option>
      </select>
    </div>
    <div className="form-group">
      <label>Address</label>
      <input type="text" placeholder="Address" />
    </div>
    
  </form>
  <div className="form-group">
      <label>&nbsp;</label>
      <button type="submit">Book Now</button>
    </div>
</div>

    </section>
  );
}

export default HeroSection;