import React, { useState } from "react";

export default function RegistrationForm({ onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    ticketType: "student",
    ticketCount: 1,
    tracks: ["Web & Cloud"],
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableTracks = [
    "Web & Cloud Hosting",
    "AI & Data Intelligence",
    "Cybersecurity & SSL",
    "Modern React Architecture"
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full Name is required";
    else if (formData.fullName.trim().length < 3) errs.fullName = "Name must be at least 3 characters";

    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      errs.phone = "Please enter a 10-digit mobile number";
    }

    if (!formData.organization.trim()) {
      errs.organization = "College or organization name is required";
    }

    if (!formData.tracks.length) {
      errs.tracks = "Select at least one track of interest";
    }

    if (!formData.agreeTerms) {
      errs.agreeTerms = "You must accept the event terms & conditions";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "agreeTerms") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === "ticketCount") {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value, 10) || 1 }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleTrackToggle = (track) => {
    setFormData((prev) => {
      const exists = prev.tracks.includes(track);
      const updated = exists
        ? prev.tracks.filter((t) => t !== track)
        : [...prev.tracks, track];
      return { ...prev, tracks: updated };
    });
    if (errors.tracks) setErrors((prev) => ({ ...prev, tracks: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real registration generation
    setTimeout(() => {
      const ticketId = "EH9-" + Math.floor(100000 + Math.random() * 900000);
      const registrationPayload = {
        ...formData,
        ticketId,
        registeredAt: new Date().toLocaleString(),
      };
      setIsSubmitting(false);
      onRegisterSuccess(registrationPayload);
    }, 600);
  };

  return (
    <div className="registration-card">
      <div className="card-header">
        <div className="card-header-icon">📝</div>
        <div>
          <h3>Event Registration Form</h3>
          <p>Fill out the details below to claim your event access pass.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name <span className="req">*</span></label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="e.g. John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? "input-error" : ""}
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address <span className="req">*</span></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. user@example.edu"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number <span className="req">*</span></label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "input-error" : ""}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          {/* College / Organization */}
          <div className="form-group">
            <label htmlFor="organization">College / Company <span className="req">*</span></label>
            <input
              id="organization"
              name="organization"
              type="text"
              placeholder="e.g. DY Patil College of Engineering"
              value={formData.organization}
              onChange={handleChange}
              className={errors.organization ? "input-error" : ""}
            />
            {errors.organization && <span className="error-text">{errors.organization}</span>}
          </div>
        </div>

        {/* Ticket Type & Quantity */}
        <div className="form-row-duo">
          <div className="form-group">
            <label htmlFor="ticketType">Pass Category</label>
            <select
              id="ticketType"
              name="ticketType"
              value={formData.ticketType}
              onChange={handleChange}
            >
              <option value="student">🎓 Student Pass (Free with ID)</option>
              <option value="professional">💼 Professional Delegate (₹499)</option>
              <option value="vip">⭐ VIP All-Access Pass (₹999)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="ticketCount">Number of Attendees</label>
            <select
              id="ticketCount"
              name="ticketCount"
              value={formData.ticketCount}
              onChange={handleChange}
            >
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
              <option value="5">5 Persons (Group)</option>
            </select>
          </div>
        </div>

        {/* Interest Tracks */}
        <div className="form-group">
          <label>Tracks of Interest <span className="req">*</span></label>
          <div className="tracks-grid">
            {availableTracks.map((track) => (
              <label
                key={track}
                className={`track-pill ${formData.tracks.includes(track) ? "selected" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={formData.tracks.includes(track)}
                  onChange={() => handleTrackToggle(track)}
                />
                <span>{track}</span>
              </label>
            ))}
          </div>
          {errors.tracks && <span className="error-text">{errors.tracks}</span>}
        </div>

        {/* Terms */}
        <div className="form-terms">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <span>
              I agree to the Event Code of Conduct and confirm that my provided information is accurate.
            </span>
          </label>
          {errors.agreeTerms && <span className="error-text block-error">{errors.agreeTerms}</span>}
        </div>

        {/* Submit */}
        <div className="form-actions">
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="spinner-text">
                <span className="btn-spinner"></span> Generating Ticket…
              </span>
            ) : (
              <span>Confirm Registration & Get Ticket 🎟️</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
