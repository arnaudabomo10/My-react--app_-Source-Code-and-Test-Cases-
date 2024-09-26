import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faHouse } from '@fortawesome/free-solid-svg-icons'; 
import 'antd/dist/reset.css';   
import './App.css';             


const logoUrl = 'https://cdn.pixabay.com/photo/2024/07/02/08/36/aircraft-8867083_1280.jpg'; 

const App = () => {
  const [language, setLanguage] = useState('EN'); 
  const [airline, setAirline] = useState('');
  const [airport, setAirport] = useState('');
  const [route, setRoute] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); 
  };

  const handleSearch = () => {
    // Logique pour gérer la recherche avec les filtres
    console.log('Searching with filters:', { airline, airport, route, ticketNumber });
  };

  return (
    <div>
      <div className="header">
        <div>
            <img src="https://play-lh.googleusercontent.com/Qv36I3HbUBEjNqv_P_PE2X-L0njxXjpcF6soGWNrbdPcIl716_0pz_zM3WuJMlnH3QU" alt="Logo" className="logo" />  {/* Logo à l'extrême gauche */}
            <h1>FlightTracker</h1>
            
        </div>

        
        <Button type="primary" onClick={handleSearch}>Rechercher</Button>
        <select value={language} onChange={handleLanguageChange} className="language-select">
          <option value="EN">EN</option>
          <option value="FR">FR</option>
        </select>
      </div>

      <div className="filter-bar">
        <Select 
          placeholder="Compagnie de vol" 
          value={airline} 
          onChange={setAirline} 
          className="filter-select"
        >
          <Select.Option value="Airline1">Airline 1</Select.Option>
          <Select.Option value="Airline2">Airline 2</Select.Option>
          {/* Ajoute d'autres compagnies de vol selon besoin */}
        </Select>
        
        <Input 
          placeholder="Aéroport" 
          value={airport} 
          onChange={(e) => setAirport(e.target.value)} 
          className="filter-input"
        />
        
        <Input 
          placeholder="Route" 
          value={route} 
          onChange={(e) => setRoute(e.target.value)} 
          className="filter-input"
        />
        
        <Input 
          placeholder="Numéro de billet" 
          value={ticketNumber} 
          onChange={(e) => setTicketNumber(e.target.value)} 
          className="filter-input"
        />
      </div>
    </div>
  );
}

export default App;
