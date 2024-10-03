// Header.js
import React from 'react';
import { Button } from 'antd'; 

const Header = ({ language, handleLanguageChange, handleSearch }) => {
  return (
    <div className="header">
      <div>
        <img 
          src="https://play-lh.googleusercontent.com/Qv36I3HbUBEjNqv_P_PE2X-L0njxXjpcF6soGWNrbdPcIl716_0pz_zM3WuJMlnH3QU" 
          alt="Logo" 
          className="logo" 
        /> 
        {/* Logo à l'extrême gauche */}
        <h1>FlightTracker</h1>
      </div>

      <Button type="primary" onClick={handleSearch}>Rechercher</Button>
      <select value={language} onChange={handleLanguageChange} className="language-select">
        <option value="EN">EN</option>
        <option value="FR">FR</option>
      </select>
    </div>
  );
};

export default Header;