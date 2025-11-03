import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard.jsx';
import '../css/Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      src: 'coolPicklePicture.webp',
      alt: 'Cool pickleball action'
    },
    {
      src: 'funnyGUyPuck.jpg',
      alt: 'Fun pickleball moment'
    },
    {
      src: 'gpaActionPickle.webp',
      alt: 'GPA action shot'
    },
    {
      src: 'girlSunPickle.webp',
      alt: 'Pickleball in the sun'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="content-wrapper">
      <section className="hero-section">
        <div className="hero-content">
          <h2>Welcome to The Pickleball Guys!</h2>
          <p>We're your premier destination for all things pickleball! Whether you're a seasoned player or just starting out, we have everything you need to enjoy this fast-growing sport. From high-quality equipment and gear to expert tips and local court information, we're here to help you improve your game and connect with the pickleball community.</p>
          <div className="cta-buttons">
            <Link to="/shop" className="cta-button primary">Shop Now</Link>
            <Link to="/how-to-play" className="cta-button secondary">Learn to Play</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="slideshow-container">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img 
                  src={`${process.env.PUBLIC_URL}/images/${slide.src}`} 
                  alt={slide.alt}
                />
              </div>
            ))}
            <button className="slideshow-btn prev" onClick={prevSlide}>
              &#8249;
            </button>
            <button className="slideshow-btn next" onClick={nextSlide}>
              &#8250;
            </button>
            <div className="slideshow-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h3>Why Choose Pickleball?</h3>
        <div className="features-grid">
          <FeatureCard 
            icon="🏓"
            title="Easy to Learn"
            description="Pickleball combines the best of tennis, badminton, and ping-pong in an easy-to-learn format that anyone can enjoy."
          />
          <FeatureCard 
            icon="💪"
            title="Great Exercise"
            description="Get a full-body workout while having fun. Pickleball provides cardiovascular exercise and improves agility and coordination."
          />
          <FeatureCard 
            icon="👥"
            title="Social Activity"
            description="Meet new people and build lasting friendships. Pickleball is known for its welcoming and inclusive community."
          />
          <FeatureCard 
            icon="🎯"
            title="All Skill Levels"
            description="From beginners to advanced players, pickleball offers challenges and enjoyment for everyone."
          />
        </div>
      </section>

      <section className="about-preview">
        <div className="about-content">
          <h3>About The Pickleball Guys</h3>
          <p>We are passionate pickleball enthusiasts who have been playing and promoting this amazing sport for over 10 years. Our mission is to help players of all skill levels discover the joy of pickleball and improve their game through quality equipment, expert advice, and community connections.</p>
          <p>Founded in 2015, we started as a small group of friends who loved playing pickleball together. What began as weekend games at local courts has grown into a full-service pickleball community.</p>
          <Link to="/about-us" className="learn-more-link">Learn More About Us →</Link>
        </div>
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/thoughtfulpickleball.webp`} alt="The Pickleball Guys team" />
        </div>
      </section>

      <section className="services-section">
        <h3>What We Offer</h3>
        <div className="services-grid">
          <div className="service-item">
            <h4>🏆 Equipment & Gear</h4>
            <p>High-quality paddles, balls, shoes, and accessories from top brands. Find the perfect gear for your game.</p>
            <Link to="/shop">Shop Equipment</Link>
          </div>
          <div className="service-item">
            <h4>📚 Learning Resources</h4>
            <p>Comprehensive guides, tips, and tutorials to help you improve your pickleball skills and strategy.</p>
            <Link to="/how-to-play">Learn More</Link>
          </div>
          <div className="service-item">
            <h4>📍 Court Information</h4>
            <p>Find local courts, playing groups, and community events in your area. Connect with other players.</p>
            <Link to="/near-you">Find Courts</Link>
          </div>
        </div>
      </section>

      <section className="gallery-preview">
        <h3>Gallery</h3>
        <p>Check out our collection of pickleball action shots and community events!</p>
        <div className="gallery-preview-grid">
          <Link to="/gallery" className="gallery-preview-item">
            <img src={`${process.env.PUBLIC_URL}/images/grouppickleball.jpg`} alt="Group playing pickleball" />
            <div className="gallery-overlay">
              <h4>Community Play</h4>
              <p>View Gallery →</p>
            </div>
          </Link>
          <Link to="/gallery" className="gallery-preview-item">
            <img src={`${process.env.PUBLIC_URL}/images/teamworkpickle.webp`} alt="Teamwork in pickleball" />
            <div className="gallery-overlay">
              <h4>Teamwork</h4>
              <p>View Gallery →</p>
            </div>
          </Link>
          <Link to="/gallery" className="gallery-preview-item">
            <img src={`${process.env.PUBLIC_URL}/images/stratpickle.webp`} alt="Strategic play" />
            <div className="gallery-overlay">
              <h4>Strategy</h4>
              <p>View Gallery →</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="contact-section">
        <h3>Contact Me</h3>
        <p>Have questions or want to get in touch? Send us a message!</p>
      </section>
    </div>
  );
}

export default Home;

