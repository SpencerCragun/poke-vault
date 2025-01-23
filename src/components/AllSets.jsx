import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function AllSets() {
  const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v2/sets`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data.length === 0) return <p>No sets found.</p>;

  console.log(data)

  return (
    <div>
      <h1>All Sets</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {data.map((set) => (
          <div 
            key={set.id} 
            style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}
          >
            <Link to={`/sets/${set.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src={set.images.logo || 'placeholder.jpg'} 
                alt={set.name} 
                style={{ width: '100px', height: 'auto', marginBottom: '0.5rem' }}
              />
              <p>{set.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
