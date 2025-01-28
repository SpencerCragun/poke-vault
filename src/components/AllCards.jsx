import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function AllCards() {
  const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v2/cards`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data.length === 0) return <p>No cards found.</p>;

  return (
    <div className='all-cards'>
      <h1>Pokémon Cards</h1>
      <div className='card-grid'>
        {data.map((card) => (
          <div key={card.id} className='card-item'>
            <Link to={`/cards/${card.id}`} className='card-link'>
              <img src={card.images.small || 'placeholder.jpg'} alt={card.name} className='card-image' />
              <p>{card.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
