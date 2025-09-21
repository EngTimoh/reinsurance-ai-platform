
import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Carousel />

      <section className="feature-section">
        <h2>Why Choose Our Platform?</h2>
        <div className="feature-grid">
          <FeatureCard 
            icon="👥" 
            title="Clients" 
            text="Easily manage policies, claims, and view risk profiles." 
          />
          <FeatureCard 
            icon="🤝" 
            title="Brokers" 
            text="Connect with clients and reinsurers to optimize deals." 
          />
          <FeatureCard 
            icon="🤖" 
            title="AI Engine" 
            text="AI-driven underwriting, risk prediction, and fraud detection." 
          />
          <FeatureCard 
            icon="🛡️" 
            title="Reinsurance Benefits" 
            text="Faster processing, cost reduction, and transparency." 
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
