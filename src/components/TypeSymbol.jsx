import React from 'react';

export default function TypeSymbol({ type }) {
  const typeSymbols = {
    Colorless: '/src/assets/colorless.png',
    Darkness: '/src/assets/darkness.png',
    Dragon: '/src/assets/dragon.png',
    Fairy: '/src/assets/fairy.png',
    Fighting: '/src/assets/fighting.png',
    Fire: '/src/assets/fire.png',
    Grass: '/src/assets/grass.png',
    Lightning: '/src/assets/lightning.png',
    Metal: '/src/assets/metal.png',
    Psychic: '/src/assets/psychic.png',
    Water: '/src/assets/water.png'
  };

  return (
    <img
      src={typeSymbols[type]}
      alt={type}
      className="type-symbol"
      title={type}
    />
  );
}
