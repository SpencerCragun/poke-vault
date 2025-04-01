import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import CardImage from '../components/CardImage';
import CardInfo from '../components/CardInfo';
import CardPrices from '../components/CardPrices';
import CardAbilities from '../components/CardAbilities';
import CardAttacks from '../components/CardAttacks';
import CardRules from '../components/CardRules';

export default function CardDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v2/cards/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(data);


  // store and subscribe instead of this props mess
  // provider and consumer?
   
  return (
    <div className='card-details-parent'>
      <div className='card-details-container'>
        <div className='card-image-container'>
          <CardImage image={data.images.large} name={data.name} />
        </div>
        <div className='card-details-right'>
          <CardInfo
            name={data.name}
            subtypes={data.subtypes}
            supertype={data.supertype}
            hp={data.hp}
            types={data.types}
            weaknesses={data.weaknesses}
            resistances={data.resistances}
            artist={data.artist}
            number={data.number}
            rarity={data.rarity}
            totalCards={data.set.printedTotal}
          />
          <CardPrices prices={data.cardmarket?.prices} />
          <CardAbilities abilities={data.abilities} />
          <CardAttacks attacks={data.attacks} />
          {data.set && data.set.id && (
            <Link to={`/sets/${data.set.id}`} className='back-to-set-link'>
              {data.set.name}
              <img src={data.set.images.symbol} className='set-symbol' />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}