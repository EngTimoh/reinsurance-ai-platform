import React from "react";
import "./ClientDashboard.css";
import { useNavigate } from "react-router-dom";

const ClientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="client-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>🛡️ ReInsure</h2>
        <div className="dashboard-actions">
          <button onClick={() => navigate("/client-dashboard")}>🏠 Dashboard</button>
          <button onClick={() => navigate("/policies")}>📑 My Policies</button>
          <button onClick={() => navigate("/claims")}>💰 Claims</button>
          <button onClick={() => navigate("/risk-profile")}>📊 Risk Profile</button>
          <button onClick={() => navigate("/settings")}>⚙️ Settings</button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <input type="text" placeholder="🔍 Search..." />
          <div className="top-actions">
            <span>🔔</span>
            <span>👤 Client</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <h1>Welcome Back!</h1>
          <p>Here’s an overview of your insurance activities.</p>

          {/* Stats Cards */}
          <div className="cards">
            <div className="card">
              <h3>Active Policies</h3>
              <p>3</p>
            </div>
            <div className="card">
              <h3>Claims Submitted</h3>
              <p>5</p>
            </div>
            <div className="card">
              <h3>Risk Score</h3>
              <p>92%</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <ul>
              <li>✅ Claim #203 approved</li>
              <li>📄 Policy #X-123 renewed</li>
              <li>💰 New premium payment received</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
