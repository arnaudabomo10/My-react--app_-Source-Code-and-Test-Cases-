import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <div className="header">
      <div>
        <img 
          src="plan.png" 
          alt="Logo" 
          className="logo" 
        /> 
        <h1>FlightTracker</h1>
      </div>

      {/* Les éléments de recherche et de langue ont été supprimés */}
    </div>
  );
};

export default Header;
