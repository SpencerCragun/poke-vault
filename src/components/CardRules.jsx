import React from 'react';

export default function CardRules({ rules }) {
  return rules && rules.length > 0 ? (
    <div className='rules'>
      <h3>Rules:</h3>
      {rules.map((rule, index) => (
        <p key={index}>{rule}</p>
      ))}
    </div>
  ) : null;
}