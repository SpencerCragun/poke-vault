import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <Link to={`/`} className='nav-link'><p>Home</p></Link>
      <SearchBar />
      <Link to={`/sets`} className='nav-link'><p>Sets</p></Link>
    </div>
  );
}
