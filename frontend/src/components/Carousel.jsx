
import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <img src={images[current]} alt="Slide" className="carousel-image" />

      {/* Overlay text + CTA */}
      <div className="carousel-overlay">
        <h1>Welcome to ReInsure AI</h1>
        <p>Smarter reinsurance with AI-powered insights.</p>
        <a href="#register" className="cta-button">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Carousel;
