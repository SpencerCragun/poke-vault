import React from 'react';

export default function CardInfo({ name, subtypes, supertypes, hp, types }) {
  return (
    <div className='card-info'>
      {name && <h1>{name}</h1>}
      {subtypes && <p>Subtype: {subtypes.join(', ')}</p>}
      {supertypes && <p>Supertype: {supertypes.join(', ')}</p>}
      {hp && <p>HP: {hp}</p>}
      {types && <p>Types: {types.join(', ')}</p>}
    </div>
  );
}