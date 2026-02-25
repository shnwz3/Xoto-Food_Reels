import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const FoodPartnerRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <Link to="/" className="back-to-home">← Back to Home</Link>
        <div className="auth-logo">xoto <small style={{ fontSize: '14px', fontWeight: '400', verticalAlign: 'middle', opacity: '0.8' }}>for partners</small></div>
        <h2 className="auth-title">Partner with xoto</h2>
        <p className="auth-subtitle">Grow your business by reaching more customers.</p>
        
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Business Name</label>
            <input type="text" id="name" placeholder="Enter your business name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Business Email</label>
            <input type="email" id="email" placeholder="Enter your business email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required />
          </div>
        
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter your address" required />
          </div>
          
          <button type="submit" className="auth-button">Register as Partner</button>
        </form>
        
        <div className="auth-footer">
          Already a partner? <Link to="/foodpartner/login" className="auth-link">Log in here</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;