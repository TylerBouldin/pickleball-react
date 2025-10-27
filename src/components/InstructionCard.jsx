import React from 'react';
import '../css/InstructionCard.css';

function InstructionCard({ title, imgName, description, altText }) {
  return (
    <div className="instruction-card">
      <div className="instruction-image">
        <img src={imgName} alt={altText} />
      </div>
      <div className="instruction-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default InstructionCard;

