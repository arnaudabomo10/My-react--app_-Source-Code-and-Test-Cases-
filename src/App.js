import React from 'react';
import './App.css'; 
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1>FLIGHT DELAY TRACKING</h1>
        {/* Langue Switch */}
        <div className="language-switch">
          <i className="fas fa-globe"></i> {/* Icône du globe */}
          <select>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <section className="info-section">
          <h2>Track Your Flights Efficiently</h2>
          <p>Get real-time updates on flight delays and plan your journey with ease.</p>
        </section>

        <section className="feature-section">
          <div className="feature-card">
            <h3>Real-time Data</h3>
            <p>Accurate and up-to-date information on flight delays.</p>
          </div>
          <div className="feature-card">
            <h3>Worldwide Coverage</h3>
            <p>Access data from airports across the globe.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
