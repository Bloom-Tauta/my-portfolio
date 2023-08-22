import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
// import {About} from './About';

function Navbar() {
  return (
    <div className='nav bg-slate-50'>
          <h4>Bloom Sayiorri</h4>
          <ul className='links'> 
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/about' >About</NavLink>
          </ul>
    </div>
  )
  //element={About}
}

export default Navbar;