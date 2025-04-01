import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function SearchResults() {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('q');
  const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}`);

  // create interface for interacting with pokemon api

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data.length === 0) return <p>No cards found.</p>;

  return (
    <div className='search-results'>
      <div className='card-grid'>
        {data.map((card) => (
          <div key={card.id} className='card-item'>
            <Link to={`/cards/${card.id}`} className='card-link'>
              <img src={card.images.small} alt={card.name} className='card-image' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}