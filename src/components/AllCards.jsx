import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function AllCards() {
  const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v2/cards`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data.length === 0) return <p>No cards found.</p>;

  return (
    <div>
      <h1>Pokémon Cards</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {data.map((card) => (
          <div 
            key={card.id} 
            style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}
          >
            <Link to={`/cards/${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src={card.images.small || 'placeholder.jpg'} 
                alt={card.name} 
                style={{ width: '100px', height: 'auto', marginBottom: '0.5rem' }}
              />
              <p>{card.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
