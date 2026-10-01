import React from "react";

export default function EventBanner() {
  return (
    <div className="event-banner">
      <div className="event-tag">🎓 SBL-AWT LAB • ANNUAL TECH SUMMIT</div>
      <h1 className="event-title">TechPulse 2026: Developer & Cloud Summit</h1>
      <p className="event-desc">
        Join industry leaders, student innovators, and cloud architects for a hands-on
        conference covering Modern Full-Stack Web Development, Cloud Hosting, and Distributed Systems.
      </p>

      <div className="event-meta-grid">
        <div className="meta-card">
          <span className="meta-icon">📅</span>
          <div>
            <strong>Date</strong>
            <p>November 15, 2026</p>
          </div>
        </div>
        <div className="meta-card">
          <span className="meta-icon">⏰</span>
          <div>
            <strong>Time</strong>
            <p>09:30 AM – 05:00 PM IST</p>
          </div>
        </div>
        <div className="meta-card">
          <span className="meta-icon">📍</span>
          <div>
            <strong>Venue</strong>
            <p>Auditorium Hall A, DYP Campus</p>
          </div>
        </div>
        <div className="meta-card">
          <span className="meta-icon">🏷️</span>
          <div>
            <strong>Access</strong>
            <p>Free Student Pass / VIP Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
