import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function SetDetails() {
  const { id } = useParams();
  const { data: setData, loading: setLoading, error: setError } = useFetch(`https://api.pokemontcg.io/v2/sets/${id}`);
  const { data: cardsData, loading: cardsLoading, error: cardsError } = useFetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`);

  if (setLoading || cardsLoading) return <p>Loading...</p>;
  if (setError || cardsError) return <p>Error: {setError || cardsError}</p>;

  return (
    <div className='set-details'>
      <h1>{setData.name}</h1>
      <div className='set-images'>
        <img src={setData.images.logo} alt="Set Logo" className='set-logo' />
        <img src={setData.images.symbol} alt="Set Symbol" className='set-symbol' />
      </div>
      <p>Release Date: {setData.releaseDate}</p>
      <p>Total Cards: {setData.total}</p>
      <p>Series: {setData.series}</p>
      <h2>Cards in this set:</h2>
      <div className='card-grid'>
        {cardsData.map((card) => (
          <div key={card.id} className='card-item'>
            <Link to={`/cards/${card.id}`} className='card-link'>
              <img src={card.images.small} alt={card.name} className='card-image' />
              <p>{card.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
