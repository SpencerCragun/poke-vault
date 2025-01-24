import React from 'react'
import useFetch from '../hooks/useFetch';

export default function SearchBar() {
  const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v2/cards`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data.length === 0) return <p>No cards found.</p>;

  return (
    <div>
      
    </div>
  )
}
