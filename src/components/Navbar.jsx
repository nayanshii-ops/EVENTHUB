import React from "react";

export default function Navbar({ onTabChange, activeTab }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">🎟️</span>
          <div className="brand-text">
            <h2>EVENT<span>HUB</span></h2>
            <span className="brand-subtitle">Exp 9: Web Hosting & Deployment</span>
          </div>
        </div>

        <nav className="nav-links">
          <button
            className={`nav-btn ${activeTab === "register" ? "active" : ""}`}
            onClick={() => onTabChange("register")}
          >
            Registration Form
          </button>
          <button
            className={`nav-btn ${activeTab === "guide" ? "active" : ""}`}
            onClick={() => onTabChange("guide")}
          >
            Hosting Guide (Exp 9)
          </button>
        </nav>

        <div className="navbar-badge">
          <span className="live-indicator"></span>
          <span>GitHub Pages Ready</span>
        </div>
      </div>
    </header>
  );
}
