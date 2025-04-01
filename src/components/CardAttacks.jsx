import React from 'react';
import TypeSymbol from './TypeSymbol';

export default function CardAttacks({ attacks }) {
  return attacks && attacks.length > 0 ? (
    <section className='attacks'>
      <h3>Attacks:</h3>
      <ul>
        {attacks.map((attack, index) => (
          <li key={index} className='attack-item'>
            <strong>{attack.name}</strong> 
            <span className="cost-container">
              {attack.cost.map((type, costIndex) => (
                <TypeSymbol key={costIndex} type={type} />
              ))}
            </span> <br />
            <strong>Damage:</strong> {attack.damage} <br />
            <strong>Effect:</strong> {attack.text}
          </li>
        ))}
      </ul>
    </section>
  ) : null;
}