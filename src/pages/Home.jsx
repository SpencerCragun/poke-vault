import React from 'react'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1>Pokévault</h1>
        <span>Welcome! Search for any Pokémon to explore its cards across generations, or browse complete sets to find your favorites.</span>
        <SearchBar />
        <Link to={`/sets`} className='nav-link'>
          <button className='sets-button'>Sets</button>
        </Link>
        <span>All information gathered from the <a href='https://pokemontcg.io/'>Pokemon TCG API</a></span>
      </div>
    </div>
  )
}
