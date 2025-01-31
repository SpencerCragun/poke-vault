import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`nav-bar ${visible ? '' : 'nav-hidden'}`}>
      <div className='nav-left'>
        <h1>PokeVault</h1>
      </div>
      <div className='nav-right'>
        <Link to={`/`} className='nav-link'><p>Home</p></Link>
        <Link to={`/sets`} className='nav-link'><p>Sets</p></Link>
      </div>
    </nav>
  );
}
