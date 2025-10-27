import React from 'react';
import '../css/CourtCard.css';

function CourtCard({ name, address, hours, courts, amenities }) {
  return (
    <div className="court-info">
      <h4>{name}</h4>
      <p>{address}</p>
      <p>{hours}</p>
      <p>{courts}</p>
      <p>{amenities}</p>
    </div>
  );
}

export default CourtCard;

