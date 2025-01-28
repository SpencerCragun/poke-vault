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
    <form onSubmit={handleSubmit} className='search-bar'>
      <input
        type="text"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className='search-input'
      />
      <button type="submit" className='search-button'>Search</button>
    </form>
  );
}