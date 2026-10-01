import React from "react";

export default function TicketConfirmation({ ticketData, onReset }) {
  if (!ticketData) return null;

  return (
    <div className="ticket-modal-overlay">
      <div className="ticket-card-wrapper">
        <div className="ticket-badge-pill">🎉 Registration Confirmed!</div>

        <div className="ticket-pass">
          <div className="ticket-left">
            <div className="ticket-header">
              <span className="ticket-logo">🎟️ EVENT<span>HUB</span></span>
              <span className="ticket-type-tag">{ticketData.ticketType.toUpperCase()} PASS</span>
            </div>

            <h2 className="ticket-title">TechPulse Summit 2026</h2>
            <p className="ticket-date-location">
              📍 DYP Campus, Pune • 📅 Nov 15, 2026 • ⏰ 09:30 AM
            </p>

            <div className="attendee-details-grid">
              <div className="detail-col">
                <span className="lbl">ATTENDEE</span>
                <span className="val">{ticketData.fullName}</span>
              </div>
              <div className="detail-col">
                <span className="lbl">EMAIL</span>
                <span className="val">{ticketData.email}</span>
              </div>
              <div className="detail-col">
                <span className="lbl">COLLEGE / ORG</span>
                <span className="val">{ticketData.organization}</span>
              </div>
              <div className="detail-col">
                <span className="lbl">PASS COUNT</span>
                <span className="val">{ticketData.ticketCount} Attendee(s)</span>
              </div>
            </div>

            <div className="ticket-tracks-summary">
              <span className="lbl">REGISTERED TRACKS:</span>
              <div className="mini-tracks">
                {ticketData.tracks.map((t) => (
                  <span key={t} className="mini-track-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="ticket-divider">
            <div className="notch top"></div>
            <div className="dashed-line"></div>
            <div className="notch bottom"></div>
          </div>

          <div className="ticket-right">
            <div className="qr-box">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
                <path d="M0,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z" />
                <path d="M70,0 h30 v30 h-30 z M80,10 h10 v10 h-10 z" />
                <path d="M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z" />
                <rect x="40" y="10" width="10" height="20" />
                <rect x="60" y="40" width="20" height="10" />
                <rect x="40" y="40" width="10" height="10" />
                <rect x="40" y="70" width="20" height="10" />
                <rect x="70" y="70" width="20" height="20" />
                <rect x="10" y="40" width="20" height="10" />
              </svg>
            </div>
            <span className="ticket-id-label">REGISTRATION ID</span>
            <span className="ticket-id-code">{ticketData.ticketId}</span>
            <span className="ticket-issued-at">Issued: {ticketData.registeredAt}</span>
          </div>
        </div>

        <div className="ticket-actions">
          <button className="btn-print" onClick={() => window.print()}>
            🖨️ Print / Save Ticket
          </button>
          <button className="btn-secondary" onClick={onReset}>
            ➕ Register Another Person
          </button>
        </div>
      </div>
    </div>
  );
}
