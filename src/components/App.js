// App.js
import Header from './Header/Header';
import React, { useState } from 'react';
import './App.css';
import Layout1 from './Layout1'; 

const App = () => {
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSearch = () => {
    // Implémentez votre logique de recherche ici
  };

  return (
    <div className="app">
      <Header 
        language={language} 
        handleLanguageChange={handleLanguageChange} 
        handleSearch={handleSearch} 
      />
      <Layout1 /> {/* Ajouter Layout1 ici */}
      {/* D'autres composants peuvent aller ici */}
    </div>
  );
};

export default App;
