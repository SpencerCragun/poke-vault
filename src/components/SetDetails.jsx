import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function SetDetails() {
  const { id } = useParams();
  const { data: setData, loading: setLoading, error: setError } = useFetch(`https://api.pokemontcg.io/v2/sets/${id}`)
  const { data: cardsData, loading: cardsLoading, error: cardsError } = useFetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>{setData.name}</h1>
      {/* <img src={setData.images.symbol} alt="Set Symbol"/>
      <img src={setData.images.logo} alt="Set Logo"/> */}
      <p>Release Date: {setData.releaseDate}</p>
      <p>Total Cards: {setData.total}</p>
      <p>Series: {setData.series}</p>

      <h2>Cards in this set:</h2>
      <div>
        {cardsData.map((card) => (
          <div key={card.id}>
            <Link to={`/cards/${card.id}`}>
              <img 
                src={card.images.small} 
                alt={card.name}
              />
              <p>{card.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
