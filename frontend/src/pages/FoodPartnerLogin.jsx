import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const FoodPartnerLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <Link to="/" className="back-to-home">← Back to Home</Link>
        <div className="auth-logo">xoto <small style={{ fontSize: '14px', fontWeight: '400', verticalAlign: 'middle', opacity: '0.8' }}>for partners</small></div>
        <h2 className="auth-title">Partner Login</h2>
        <p className="auth-subtitle">Access your dashboard and manage orders.</p>
        
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your business email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          
          <button type="submit" className="auth-button">Partner Login</button>
        </form>
        
        <div className="auth-footer">
          Not a partner yet? <Link to="/foodpartner/register" className="auth-link">Register your restaurant</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;