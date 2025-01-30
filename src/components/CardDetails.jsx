import React from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import CardImage from './CardImage';
import CardInfo from './CardInfo';
import CardPrices from './CardPrices';
import CardAbilities from './CardAbilities';
import CardAttacks from './CardAttacks';
import CardRules from './CardRules';

export default function CardDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v2/cards/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(data);

  return (
    <div className='card-details-parent'>
      <div className='card-details-container'>
        <CardImage image={data.images.large} name={data.name} />
        <CardInfo
          name={data.name}
          subtypes={data.subtypes}
          supertypes={data.supertypes}
          hp={data.hp}
          types={data.types}
        />
        <CardPrices prices={data.cardmarket?.prices} />
        <CardAbilities abilities={data.abilities} />
        <CardAttacks attacks={data.attacks} />
        <CardRules rules={data.rules} />
      </div>
    </div>
  );
}