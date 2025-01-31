import React from 'react';

export default function CardPrices({ prices }) {
  return prices ? (
    <ul className='card-prices'>
      <h3>Card Prices:</h3>
      <span>Average Sell Price:</span>
      {prices.averageSellPrice && <li>${prices.averageSellPrice}</li>}
      <span>Average Sell Price:</span>
      {prices.lowPrice && <li>Low Price: ${prices.lowPrice}</li>}
      <span>Average Sell Price:</span>
      {prices.trendPrice && <li>Trend Price: ${prices.trendPrice}</li>}
      <span>Average Sell Price:</span>
      {prices.avg1 && <li>Average 1 Day Price: ${prices.avg1}</li>}
      <span>Average Sell Price:</span>
      {prices.avg7 && <li>Average 7 Day Price: ${prices.avg7}</li>}
      <span>Average Sell Price:</span>
      {prices.avg30 && <li>Average 30 Day Price: ${prices.avg30}</li>}
    </ul>
  ) : (
    <p>No pricing available</p>
  );
}