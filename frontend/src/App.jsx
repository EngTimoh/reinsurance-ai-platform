import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ClientDashboard from "./pages/ClientDashboard";
import Claims from "./pages/Claims";

function App() {
  return (
    <Router>
      <Routes>
        {}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {}
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/claims" element={<Claims />} />

        
        
        
      </Routes>
    </Router>
  );
}

export default App;
