import React from 'react'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1>Pokévault</h1>
        <span>A great place to look up Pokémon cards, etc.</span>
        <SearchBar />
        <Link to={`/sets`} className='nav-link'>
          <button className='sets-button'>Sets</button>
        </Link>
      </div>
    </div>
  )
}
