import React from 'react';

export default function CardInfo({ name, subtypes, supertypes, hp, types }) {
  return (
    <div className='card-info'>
      {name && <h1 className='card-name'>{name}</h1>}
      {subtypes && <p>{subtypes.join(', ')}</p>}
      {supertypes && <p>{supertypes.join(', ')}</p>}
      {hp && <p>HP: {hp}</p>}
      {types && <>
        <span>Type</span><p>{types.join(', ')}</p>
      </>}
    </div>
  );
}