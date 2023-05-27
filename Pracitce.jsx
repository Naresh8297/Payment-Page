import React, { useState } from 'react';
import './SubscriptionPlan.css'; 


const Pracitce = () => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    
  };

  return (
    <div>
      <header>
        <div className="topbar">
          <div className="search-bar">
            
          </div>
          <div className="user-actions">
            <button>Login</button>
            <button>Join Now</button>
          </div>
        </div>
        <div className="nav-bar">
          <ul>
            <li>Courses</li>
            <li>Programs</li>
          </ul>
        </div>
      </header>
      <main>
        <div className="signup-section">
          
        </div>
        <div className="subscribe-section">
          <h2>Choose Your Subscription Plan</h2>
          <div className="plan">
            <div className={`plan-item ${selectedPlan === '12months' ? 'selected' : ''}`}>
              <h3>12 Months Plan</h3>
              <p>Price: $99</p>
              <button onClick={() => handlePlanSelection('12months')}>Select</button>
            </div>
            <div className={`plan-item ${selectedPlan === '9months' ? 'selected' : ''}`}>
              <h3>9 Months Plan</h3>
              <p>Price: $79</p>
              <button onClick={() => handlePlanSelection('9months')}>Select</button>
            </div>
            <div className={`plan-item ${selectedPlan === '3months' ? 'selected' : ''}`}>
              <h3>3 Months Plan</h3>
              <p>Price: $49</p>
              <button onClick={() => handlePlanSelection('3months')}>Select</button>
            </div>
          </div>
          <div className="action-buttons">
            <button onClick={handlePayment}>Proceed to Pay</button>
            <button>Cancel</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pracitce;


