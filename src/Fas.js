import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importation de Font Awesome

function FeatureCard() {
  return (
    <div className="feature-card">
      <i className="fas fa-clock"></i> {/* Icon for real-time */}
      <h3>Real-time Data</h3>
      <p>Accurate and up-to-date information on flight delays.</p>
    </div>
  );
}

export default FeatureCard;