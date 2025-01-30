import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function AllSets() {
  const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v2/sets`);

  // Group sets by series
  const setsBySeries = data.reduce((acc, set) => {
    if (!acc[set.series]) {
      acc[set.series] = [];
    }
    acc[set.series].push(set);
    return acc;
  }, {});

  return (
    <div className='all-sets'>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {Object.keys(setsBySeries).map((series) => (
        <div key={series} className='series-group'>
          <h2>{series}</h2>
          <div className='set-grid'>
            {setsBySeries[series].map((set) => (
              <div key={set.id} className='set-item'>
                <Link to={`/sets/${set.id}`} className='set-link'>
                  <img src={set.images.logo || 'placeholder.jpg'} alt={set.name} className='set-image' />
                  <p>{set.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
