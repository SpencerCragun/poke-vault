import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  
  return (
    
    <div>
      <Link to={`/`}><p>Home</p></Link>
      <input type='text' placeholder='search for card'></input>
      <Link to={`/sets`}><p>Sets</p></Link>
    </div>
  )
}
