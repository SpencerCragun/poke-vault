import React from 'react';

export default function CardAttacks({ attacks }) {
  return attacks && attacks.length > 0 ? (
    <section className='attacks'>
      <h3>Attacks:</h3>
      <ul>
        {attacks.map((attack, index) => (
          <li key={index} className='attack-item'>
            <strong>Name:</strong> {attack.name} <br />
            <strong>Damage:</strong> {attack.damage} <br />
            <strong>Cost:</strong> {attack.cost.join(', ')} <br />
            <strong>Effect:</strong> {attack.text}
          </li>
        ))}
      </ul>
    </section>
  ) : null;
}