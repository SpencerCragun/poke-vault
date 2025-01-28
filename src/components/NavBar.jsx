import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function NavBar() {
  
  return (
    
    <div>
      <Link to={`/`}><p>Home</p></Link>
      <SearchBar />
      <Link to={`/sets`}><p>Sets</p></Link>
    </div>
  )
}
