import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import EventBanner from "./components/EventBanner.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import TicketConfirmation from "./components/TicketConfirmation.jsx";
import HostingGuide from "./components/HostingGuide.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("register");
  const [confirmedTicket, setConfirmedTicket] = useState(null);

  const handleRegisterSuccess = (ticketPayload) => {
    setConfirmedTicket(ticketPayload);
  };

  const handleResetRegistration = () => {
    setConfirmedTicket(null);
  };

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="main-content">
        {activeTab === "register" ? (
          <div className="content-wrapper">
            <EventBanner />
            <RegistrationForm onRegisterSuccess={handleRegisterSuccess} />
            <TicketConfirmation
              ticketData={confirmedTicket}
              onReset={handleResetRegistration}
            />
          </div>
        ) : (
          <div className="content-wrapper">
            <HostingGuide />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
