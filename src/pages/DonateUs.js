// src/pages/DonateUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DonorCard from '../components/DonorCard';
import '../css/DonateUs.css';
import donatecover from '../assets/Images/cover_donate.jpg';
import donor1 from '../assets/Images/donor1.jpg';
import donor2 from '../assets/Images/donor2.jpg';
import donor3 from '../assets/Images/donor_food.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const donors = [
  { name: 'Vivek', amount: 'Rs100000', message: 'Keep up the great work!', image: donor1 },
  { name: 'Smitha', amount: 'Rs 50000', message: 'Happy to help!Help More', image: donor2 },
  { name: 'Rajesh', amount: 'Rs 1000000', message: 'Your help makes a change', image: donor3 }
  // Add more donors as needed
];

const DonateUs = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donationPaymentForm');
  };

  return (
    <>
      <Navbar/>
      <div className="donate-us-container">
        <h1 className="title">Donate Us</h1>
        <div className="cover-image-container">
          <img src={donatecover} alt="Cover" className="cover-image" />
        </div>
        
        <p className="description">
          <center>Your generous donations help us continue our mission. Thank you for your support!</center>
        </p>
        <button className="btn btn-primary donate-button" onClick={handleDonateClick}>
          Donate Now
        </button>
        <div className="donors-section">
          <h2 className="donors-title">Our Donors</h2>
          <div className="donor-cards-container">
            {donors.map((donor, index) => (
              <DonorCard key={index} donor={donor} />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DonateUs;
