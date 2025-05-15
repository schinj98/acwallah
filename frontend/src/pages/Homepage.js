import React from 'react';
import './HomePage.css';
import acImage from './homepage-card.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import selfListed from './profile-listing-card.png';
import reviewImg from './review-section.jpeg';

const services = [
  {
    title: 'AC Installation',
    price: '₹800',
    description: [
      'Pre Job Inspection: Comprehensive AC Diagnosis',
      'Installation of both indoor and outdoor units',
      'Post Job Inspection: Thorough checks of gas levels',
      '30 Days ACWallah Warrenty'
    ]
  },
  {
    title: 'AC Repair',
    price: '₹800',
    description: [
      'Pre Job Inspection: Comprehensive AC Diagnosis',
      'Installation of both indoor and outdoor units',
      'Post Job Inspection: Thorough checks of gas levels',
      '30 Days ACWallah Warrenty'
    ]
  },
  {
    title: 'AC Repair',
    price: '₹800',
    description: [
      'Pre Job Inspection: Comprehensive AC Diagnosis',
      'Installation of both indoor and outdoor units',
      'Post Job Inspection: Thorough checks of gas levels',
      '30 Days ACWallah Warrenty'
    ]
  },
  {
    title: 'Gas Filling',
    price: '₹800',
    description: [
      'Pre Job Inspection: Comprehensive AC Diagnosis',
      'Installation of both indoor and outdoor units',
      'Post Job Inspection: Thorough checks of gas levels',
      '30 Days ACWallah Warrenty'
    ]
  }
];

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="services-container">
        <h2 className="section-heading">
          Our <span className="highlight">Services</span>
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={acImage} alt={service.title} className="service-image" />
              <div className="card-header">
                <h3>{service.title}</h3>
                <button className="book-now">Book Now</button>
              </div>
              <p className="price">starts from {service.price}</p>
              <ul>
                {service.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <a href="#" className="read-more">Read More &gt;</a>
            </div>
          ))}
        </div>
      </div>
      <div className='profile-listed-title'>
        <h2>Old Listed <span style={{color : "#0055DE"}}> AC  Products</span></h2>
        <span><a href='/'>View All  </a></span>
      </div>
      <div className="ac-cards-section">
        {[1, 2, 3].map((item) => (
          <div className="ac-card" key={item}>
            <img src={selfListed} alt="AC" />
            <div className="ac-details">
              <strong>Voltas</strong>
              <span>Voltas 183V DZU 1.5 Ton</span>
            </div>
          </div>
        ))}
      </div>

      {/* review section */}
      <div className='homepage-review-section'>
          <div className='review-sec-left'>
            <p>Clients <span style={{color : "blue"}}> Feedback </span></p>
            <h2>What are Happy Customer Saying!!</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop .

</p>
          </div>
          <div className='review-sec-right'>
            <img src={reviewImg} alt="review" />
          </div>
      </div>

      {/* homepage last banner */}
      <div className="vip-section">
        <div className="vip-left">
          <h3>Looking to sell your Old AC!?</h3>
          <p>Get the price with zero hassle and more benefits only with VIP membership.</p>
        </div>
        <div className="vip-right">
          <button className="vip-button">Sell Now</button>
        </div>
      </div>
    </div>

    

    
  );
};


export default HomePage;
