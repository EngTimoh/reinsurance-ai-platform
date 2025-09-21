
// src/components/Topbar.jsx
import React from "react";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="search">🔍 <input type="text" placeholder="Search..." /></div>
      <div className="profile">
        <span>🔔</span>
        <span>👤 Timothy</span>
      </div>
    </header>
  );
};

export default Topbar;
