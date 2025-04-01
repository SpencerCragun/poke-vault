import React from 'react';
import colorless from '../assets/colorless.png';
import darkness from '../assets/darkness.png';
import dragon from '../assets/dragon.png';
import fairy from '../assets/fairy.png';
import fighting from '../assets/fighting.png';
import fire from '../assets/fire.png';
import grass from '../assets/grass.png';
import lightning from '../assets/lightning.png';
import metal from '../assets/metal.png';
import psychic from '../assets/psychic.png';
import water from '../assets/water.png';

export default function TypeSymbol({ type }) {
  const typeSymbols = {
    Colorless: colorless,
    Darkness: darkness,
    Dragon: dragon,
    Fairy: fairy,
    Fighting: fighting,
    Fire: fire,
    Grass: grass,
    Lightning: lightning,
    Metal: metal,
    Psychic: psychic,
    Water: water
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
