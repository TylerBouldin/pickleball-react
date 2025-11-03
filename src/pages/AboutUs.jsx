import React, { useState } from 'react';
import '../css/AboutUs.css';

function AboutUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('');

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitStatus('');
    }, 5000);
  };

  return (
    <div className="content-wrapper">
      <div className="about-hero">
        <h1>About The Pickleball Guys</h1>
        <p className="hero-subtitle">Your trusted source for everything pickleball</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-content">
            <h2>Our Mission</h2>
            <p>We are passionate pickleball enthusiasts who have been playing and promoting this amazing sport for over 10 years. Our mission is to help players of all skill levels discover the joy of pickleball and improve their game through quality equipment, expert advice, and community connections.</p>
          </div>
        </section>

        <section className="about-section alt-background">
          <div className="section-content">
            <h2>Our Story</h2>
            <p>Founded in 2015, The Pickleball Guys started as a small group of friends who loved playing pickleball together. What began as weekend games at local courts has grown into a full-service pickleball community, offering everything from beginner lessons to professional-grade equipment.</p>
            <p>Today, we're proud to serve thousands of pickleball players across the country, helping them elevate their game and connect with a vibrant community of enthusiasts.</p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-content">
            <h2>Contact Us</h2>
            <p className="contact-intro">Have questions or want to get in touch? We'd love to hear from you!</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
              
              {submitStatus === 'success' && (
                <div className="form-message success">
                  Thank you! Your message has been sent.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-message error">
                  Please fill in all fields correctly.
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;

