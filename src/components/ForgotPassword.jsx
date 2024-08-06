import React from 'react';
import '../css/Login.css';
import Navbar from './Navbar';

const ForgotPassword = () => {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h2>Forgot Password</h2>
          <form>
            <label><b>Email</b></label>
            <input type="email" placeholder="Enter your email " />
            <button type="submit" className="btn-secondary m-3">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;

