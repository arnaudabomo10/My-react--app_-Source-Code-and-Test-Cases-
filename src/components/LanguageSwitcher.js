// components/LanguageSwitcher.js
import React from 'react';

const LanguageSwitcher = ({ onLanguageChange }) => {
  const handleChange = (event) => {
    onLanguageChange(event.target.value); // Passe la langue sélectionnée
  };

  return (
    <select onChange={handleChange}>
      <option value="EN">English</option>
      <option value="FR">Français</option>
      {/* Ajoute d'autres langues ici si nécessaire */}
    </select>
  );
};

export default LanguageSwitcher;
