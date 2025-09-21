
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">🛡️ ReInsure AI</h2>
      <nav>
        <ul>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
