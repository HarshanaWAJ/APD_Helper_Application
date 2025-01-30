import React from 'react';
import '../css/LandingPage.css'; // Create this CSS file for styling
import heroImage from '../images/hero_sec.jpeg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})`,
        height: '20vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' }}>
        <div className="hero-content">
          <h1>Welcome to APD Helper</h1>
          <p>Your ultimate assistant for managing APD tasks efficiently.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Voice to Text Converter</h3>
            <p>Easily convert voices to text realtime.</p>
          </div>
          <div className="feature">
            <h3>Improve Voice Quallity</h3>
            <p>Improve the quallity of the voices.</p>
          </div>
          <div className="feature">
            <h3>Sign Language Identification</h3>
            <p>Identify the sign language realtime and covert it into text.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users who are already managing their APD tasks efficiently.</p>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
};

export default LandingPage;