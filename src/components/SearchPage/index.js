import React, { useState } from 'react'; // Décommente l'importation de useState
import './SearchPage.css'; // Import du fichier CSS
import { DatePicker } from "antd";

export default () => {
  return (
    <di>
      <div>style ={StylePropertyMap.box}>
        <div>Carrier</div>
        <div>Flight Num</div>
        <div>
          <DatePicker/>
        </div>

      </div>
    </di>
  );
};

const SearchPage = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Recherche effectuée avec la requête :', query);
  };

  return (
    <div className="search-page-container">
      <h1>Search Page</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Recherchez quelque chose..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Rechercher
      </button>
    </div>
  );
};

export default SearchPage;
