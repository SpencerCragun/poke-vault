import React from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

export default function CardDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v2/cards/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='card-details'>
      <h1>{data.name}</h1>
      <img src={data.images.large} alt={data.name} className='card-image-large' />
      <p>Subtype: {data.subtypes.join(', ')}</p>
      <p>HP: {data.hp}</p>
      <p>Types: {data.types.join(', ')}</p>
      <h3>Card Prices:</h3>
      <ul>
        <li>Average Sell Price: ${data.cardmarket.prices.averageSellPrice || 'N/A'}</li>
        <li>Low Price: ${data.cardmarket.prices.lowPrice || 'No price found'}</li>
        <li>Trend Price: ${data.cardmarket.prices.trendPrice || 'No price found'}</li>
        <li>Average 1 Day Price: ${data.cardmarket.prices.avg1 || 'No price found'}</li>
        <li>Average 7 Day Price: ${data.cardmarket.prices.avg7 || 'No price found'}</li>
        <li>Average 30 Day Price: ${data.cardmarket.prices.avg30 || 'No price found'}</li>
      </ul>
      {data.abilities && data.abilities.length > 0 && (
        <div className='abilities'>
          <h3>Abilities:</h3>
          {data.abilities.map((ability, index) => (
            <div key={index} className='ability-item'>
              <p>{ability.name}</p>
              <p>{ability.text}</p>
            </div>
          ))}
        </div>
      )}
      <section className='attacks'>
        <h3>Attacks:</h3>
        <ul>
          {data.attacks && data.attacks.length > 0 ? (
            data.attacks.map((attack, index) => (
              <li key={index} className='attack-item'>
                <strong>Name:</strong> {attack.name} <br />
                <strong>Damage:</strong> {attack.damage} <br />
                <strong>Cost:</strong> {attack.cost} <br />
                <strong>Effect:</strong> {attack.text}
              </li>
            ))
          ) : (
            <p>No attacks available for this card.</p>
          )}
        </ul>
      </section>
    </div>
  );
}
