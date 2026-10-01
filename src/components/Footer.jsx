import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <div className="footer-brand">🎟️ EVENT<span>HUB</span></div>
          <p>Experiment 9: Hosting with Domain Registration & GitHub Pages deployment.</p>
        </div>
        <div className="footer-col">
          <h4>Course Details</h4>
          <p>Subject: Advanced Web Technology (SBL-AWT)</p>
          <p>Stack: React 19 + Vite + gh-pages</p>
        </div>
        <div className="footer-col">
          <h4>GitHub Details</h4>
          <p>User: <code>nayanshii-ops</code></p>
          <p>Repository: <code>EVENTHUB</code></p>
          <p>Branch: <code>main</code> & <code>gh-pages</code></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 EventHub Project • All Rights Reserved</p>
      </div>
    </footer>
  );
}
