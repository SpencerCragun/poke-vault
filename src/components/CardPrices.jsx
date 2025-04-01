import React from 'react';

export default function CardPrices({ prices }) {
  return prices ? (
    <ul className='card-prices'>
      <h3>Card Prices:</h3>
      {prices.averageSellPrice && <li>Average Price: <b>${prices.averageSellPrice}</b></li>}
      {prices.lowPrice && <li>Low Price: <b>${prices.lowPrice}</b></li>}
      {prices.trendPrice && <li>Trend Price: <b>${prices.trendPrice}</b></li>}
      {prices.avg1 && <li>Average 1 Day Price: <b>${prices.avg1}</b></li>}
      {prices.avg7 && <li>Average 7 Day Price: <b>${prices.avg7}</b></li>}
      {prices.avg30 && <li>Average 30 Day Price: <b>${prices.avg30}</b></li>}
    </ul>
  ) : (
    <p>No pricing available</p>
  );
}