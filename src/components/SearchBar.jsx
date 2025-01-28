import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        style={{ 
          padding: '8px',
          marginBottom: '20px',
          width: '200px'
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}