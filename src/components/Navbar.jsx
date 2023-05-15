import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';


function Navbar() {
  return (
    <div className='nav'>
          <h4>Bloom Sayiorri</h4>
          <ul className='links'> 
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/about'>About</NavLink>
          </ul>
    </div>
  )
}

export default Navbar