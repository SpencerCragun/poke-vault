import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom';

export default function CardDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v2/cards/${id}`)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(data)
  return (
    <div>
      <h1>{data.name}</h1>
      <img
        src={data.images.large}
        alt={data.name}
        style={{ width: '300px' }}
      />
      <p>Subtype: {data.subtypes?.join(', ')}</p>
      <p>HP: {data.hp}</p>
      <p>Types: {data.types?.join(', ')}</p>
      <p>
        Average Sell Price: $
        {data?.cardmarket.prices.averageSellPrice || 'N/A'}
      </p>
    </div>
  )
}
