import React from 'react';
import '../css/ProductCard.css';

function ProductCard({ name, imgName, price, description, skillLevel }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imgName} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="product-price">{price}</p>
        <p className="product-description">{description}</p>
        <p className="product-skill-level">Skill Level: {skillLevel}</p>
      </div>
    </div>
  );
}

export default ProductCard;

