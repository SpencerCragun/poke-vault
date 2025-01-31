import React from 'react';
import TypeSymbol from './TypeSymbol';

export default function CardInfo({ name, subtypes, supertype, hp, types, weaknesses, resistances, artist, number, rarity, totalCards }) {
  return (
    <div className='card-info'>
      {name && <h1 className='card-name'>{name}</h1>}
      {subtypes && <p>{subtypes.join(', ')}</p>}
      {supertype && <p>{supertype}</p>}
      {hp && <p>HP: {hp}</p>}
      {types && (
        <div className="type-container">
          <span>Types: </span>
          {types.map((type, index) => (
            <div key={index} className="type-wrapper">
              <TypeSymbol type={type} />
              <span>{type}</span>
            </div>
          ))}
        </div>
      )}
      {weaknesses && weaknesses.length > 0 && (
        <div className="type-container">
          <span>Weaknesses: </span>
          {weaknesses.map((w, index) => (
            <div key={index} className="type-wrapper">
              <TypeSymbol type={w.type} />
              <span>{w.value}</span>
            </div>
          ))}
        </div>
      )}
      {resistances && resistances.length > 0 && (
        <div className="type-container">
          <span>Resistances: </span>
          {resistances.map((r, index) => (
            <div key={index} className="type-wrapper">
              <TypeSymbol type={r.type} />
              <span>{r.value}</span>
            </div>
          ))}
        </div>
      )}
      {artist && <p>Artist: {artist}</p>}
      {number && totalCards && <p>{number} / {totalCards}</p>}
      {rarity && <p>{rarity}</p>}
    </div>
  );
}