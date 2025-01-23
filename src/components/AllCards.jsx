import React from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function AllCards() {
  
  const { data, loading, error} = useFetch(`https://api.pokemontcg.io/v2/cards`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error?.message || 'An error occurred'}</p>;

  return (
    <div>
      <h1>Test</h1>
      {data.map((card) => (
        <div key={card.id}>
          <Link to={`/cards/${card.id}`}>
            <p>{card.name}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
