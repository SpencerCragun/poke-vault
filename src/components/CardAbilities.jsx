import React from 'react';

export default function CardAbilities({ abilities }) {
  return abilities && abilities.length > 0 ? (
    <div className='abilities'>
      <h3>Abilities:</h3>
      {abilities.map((ability, index) => (
        <div key={index} className='ability-item'>
          <p>{ability.name}</p>
          <p>{ability.text}</p>
        </div>
      ))}
    </div>
  ) : null;
}