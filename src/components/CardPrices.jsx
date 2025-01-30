import React from 'react';

export default function CardPrices({ prices }) {
  return prices ? (
    <ul className='card-prices'>
      <h3>Card Prices:</h3>
      {prices.averageSellPrice && <li>Average Sell Price: ${prices.averageSellPrice}</li>}
      {prices.lowPrice && <li>Low Price: ${prices.lowPrice}</li>}
      {prices.trendPrice && <li>Trend Price: ${prices.trendPrice}</li>}
      {prices.avg1 && <li>Average 1 Day Price: ${prices.avg1}</li>}
      {prices.avg7 && <li>Average 7 Day Price: ${prices.avg7}</li>}
      {prices.avg30 && <li>Average 30 Day Price: ${prices.avg30}</li>}
    </ul>
  ) : (
    <p>No pricing available</p>
  );
}