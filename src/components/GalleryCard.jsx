import React from 'react';
import '../css/GalleryCard.css';

function GalleryCard({ title, imgName, description, altText }) {
  return (
    <div className="gallery-card">
      <div className="gallery-card-image">
        <img src={imgName} alt={altText} />
      </div>
      <div className="gallery-card-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default GalleryCard;

