import React from 'react';
import '../css/CourtCard.css';

function CourtCard({ name, address, hours, courts, amenities, image }) {
  return (
    <div className="court-info">
      {image && (
        <img 
          src={image} 
          alt={name}
          style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }}
        />
      )}
      <h4>{name}</h4>
      <p>{address}</p>
      <p>{hours}</p>
      <p>{courts}</p>
      <p>{amenities}</p>
    </div>
  );
}

export default CourtCard;

