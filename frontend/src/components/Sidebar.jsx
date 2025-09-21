
// src/components/Sidebar.jsx
import React from "react";

const Sidebar = ({ setActivePage }) => {
  return (
    <aside className="sidebar">
      <h2>Reinsurance </h2>
      <ul>
        <li onClick={() => setActivePage("dashboard")}>🏠 Dashboard</li>
        <li onClick={() => setActivePage("clients")}>👥 Clients</li>
        <li onClick={() => setActivePage("brokers")}>🤝 Brokers</li>
        <li>⚙️ Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
