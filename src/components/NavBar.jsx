import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='nav-left'>
        <h1>PokeVault</h1>
        <SearchBar />
      </div>
      <div className='nav-right'>
        <Link to={`/`} className='nav-link'><p>Home</p></Link>
        <Link to={`/sets`} className='nav-link'><p>Sets</p></Link>
      </div>
    </div>
  );
}
