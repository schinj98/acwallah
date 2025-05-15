import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import './Pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';


function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const features = [
    "App management",
    "Attendance management",
    "Employee management",
    "Leave system management",
    "Expense tracking",
    "Chat support",
    "Invoice generate",
    "Purchase generate",
    "Payroll"
  ];

  const plans = [
    {
      name: "Basic",
      price: "$50",
      included: [
        false, true, true, true, false, true, false, false, false
      ]
    },
    {
      name: "VIP",
      price: "$200",
      included: [
        true, true, true, true, true, true, true, false, false
      ]
    },
    {
      name: "Premium",
      price: "$150",
      included: [
        true, true, true, true, true, true, true, true, true
      ]
    }
  ];

  return (
    <>

      <div className="pricing-container">
        <h2 className="pricing-title">Our Subscription Models</h2>

        <div className="pricing-cards">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === index;
            return (
              <div
                key={index}
                className={`pricing-card ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(index)}
              >
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-price">{plan.price}</p>
                <p className="plan-user">User / Month</p>
                <ul className="features-list">
                  {features.map((feature, i) => {
                    if (plan.included[i]) {
                      return (
                        <li
                          key={`included-${i}`}
                          className={`included-feature ${isSelected ? 'selected-included' : ''}`}
                        >
                          <span className="icon">
                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />
                          </span>
                          {feature}
                        </li>
                      );
                    }
                    return null;
                  })}

                  {features.map((feature, i) => {
                    if (!plan.included[i]) {
                      return (
                        <li
                          key={`excluded-${i}`}
                          className={`excluded-feature ${isSelected ? 'selected-excluded' : ''}`}
                        >
                          <span className="icon">
                            <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'red' }} />
                          </span>
                          {feature}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>


                <button className='pricing-choose-btn' >Choose Plan</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Pricing;
