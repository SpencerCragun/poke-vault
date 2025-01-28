import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function AllCards() {
  const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v2/cards`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data.length === 0) return <p>No cards found.</p>;

    // Function to shuffle an array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
  
    // Shuffle the data and slice the first 10 elements
    const randomCards = data ? shuffleArray([...data]).slice(0, 12) : [];

  return (
    <div className='all-cards'>
      <h1>Featured Cards</h1>
      <div className='card-grid'>
        {randomCards.map((card) => (
          <div key={card.id} className='card-item'>
            <Link to={`/cards/${card.id}`} className='card-link'>
              <img src={card.images.small || 'placeholder.jpg'} alt={card.name} className='card-image' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
