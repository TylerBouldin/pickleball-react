import React from 'react';
import GalleryCard from '../components/GalleryCard.jsx';
import '../css/Gallery.css';

function Gallery() {
  return (
    <div className="content-wrapper">
      <section className="gallery-section">
        <h2>Pickleball Gallery</h2>
        <p>Check out our collection of pickleball action shots, equipment, and community events!</p>
        
        <div className="gallery-grid">
          <GalleryCard 
            title="Community Play"
            imgName="/images/grouppickleball.jpg"
            description="Local players enjoying a friendly game"
            altText="Group playing pickleball"
          />
          <GalleryCard 
            title="Teamwork"
            imgName="/images/teamworkpickle.webp"
            description="Players working together on the court"
            altText="Teamwork in pickleball"
          />
          <GalleryCard 
            title="Strategy"
            imgName="/images/stratpickle.webp"
            description="Players planning their next move"
            altText="Strategic play"
          />
          <GalleryCard 
            title="Kitchen Play"
            imgName="/images/kitchenpickleball.webp"
            description="Close-up action in the kitchen area"
            altText="Kitchen area play"
          />
          <GalleryCard 
            title="Serving"
            imgName="/images/servingpickleball.webp"
            description="Perfecting the serve technique"
            altText="Serving technique"
          />
          <GalleryCard 
            title="Focus"
            imgName="/images/thoughtfulpickleball.webp"
            description="Players concentrating on their game"
            altText="Thoughtful play"
          />
        </div>
      </section>
    </div>
  );
}

export default Gallery;

