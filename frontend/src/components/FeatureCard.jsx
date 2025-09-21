
import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="feature-card">
      <h3>{icon} {title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;
