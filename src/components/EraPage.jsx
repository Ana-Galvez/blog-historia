import React, { useState, useMemo } from 'react';
import './EraPage.css';

const EraPage = ({ title, description, items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchTerm) return items;

    const normalizeText = (text) => {
      return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    };

    const normalizedSearch = normalizeText(searchTerm);

    return items.filter((item) =>
      normalizeText(item).startsWith(normalizedSearch)
    );
  }, [items, searchTerm]);

  return (
    <div className="page-content">
      <h1>{title}</h1>
      <p>{description}</p>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No se encontraron resultados</li>
        )}
      </ul>
    </div>
  );
};

export default EraPage;
