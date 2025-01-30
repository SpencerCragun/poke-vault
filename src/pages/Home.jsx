import React from 'react'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Pokévault</h1>
      <span>A great place to look up pokemon cards, etc.</span>
      <SearchBar />
      <Link to={`/sets`} className='nav-link'><button>Sets</button></Link>
    </div>
  )
}
