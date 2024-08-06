// src/components/DonorCard.js
import React from 'react';
import '../css/DonorCard.css';

const DonorCard = ({ donor }) => {
  return (
    <div className="donor-card">
      <img src={donor.image} alt={`${donor.name}'s image`} className="donor-image" />
      <h3>{donor.name}</h3>
      <p>{donor.amount}</p>
      <p>{donor.message}</p>
    </div>
  );
};

export default DonorCard;
