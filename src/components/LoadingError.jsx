import React from 'react';
import pokeballGif from '../assets/simple_pokeball.gif';

export default function LoadingError({ loading, error }) {
  if (loading) return <img src={pokeballGif} alt="Loading..." className='loading-gif' />;
  if (error) return <p>Error: {error}</p>;
  return null;
}