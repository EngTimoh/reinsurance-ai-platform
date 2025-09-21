import React, { useState } from "react";
import Sidebar from "./components/Sidebar";  
import Topbar from "./components/Topbar";    
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Brokers from "./pages/Brokers";

const App = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "clients":
        return <Clients />;
      case "brokers":
        return <Brokers />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      {}
      <Sidebar setActivePage={setActivePage} />

      {}
      <div className="main-content">
        <Topbar />
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
