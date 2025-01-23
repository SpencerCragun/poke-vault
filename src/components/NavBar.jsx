import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  
  return (
    
    <div>
      <input type='text' placeholder='search for card'></input>
      <Link to={`/sets`} style={{ textDecoration: 'none', color: 'inherit' }}><p>Sets</p></Link>
    </div>
  )
}
