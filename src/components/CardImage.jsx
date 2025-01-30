import React from 'react';

export default function CardImage({ image, name }) {
  return image ? <img src={image} alt={name} className='card-image-large' /> : null;
}