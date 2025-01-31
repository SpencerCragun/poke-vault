import React from 'react';

export default function CardInfo({ name, subtypes, supertype, hp, types, weaknesses, resistances, artist, number, rarity, totalCards }) {
  return (
    <div className='card-info'>
      {name && <h1 className='card-name'>{name}</h1>}
      {subtypes && <p>{subtypes.join(', ')}</p>}
      {supertype && <p>{supertype}</p>}
      {hp && <p>HP: {hp}</p>}
      {types && <p>Types: {types.join(', ')}</p>}
      {weaknesses && weaknesses.length > 0 && (
        <p>Weaknesses: {weaknesses.map(w => `${w.type} ${w.value}`).join(', ')}</p>
      )}
      {resistances && resistances.length > 0 && (
        <p>Resistances: {resistances.map(r => `${r.type} ${r.value}`).join(', ')}</p>
      )}
      {artist && <p>Artist: {artist}</p>}
      {number && totalCards && <p>{number} / {totalCards}</p>}
      {rarity && <p>{rarity}</p>}
    </div>
  );
}