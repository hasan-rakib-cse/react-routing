import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to="/" className='navlink'>Home</NavLink>
        <NavLink to="/blogs" className='navlink'>Blogs</NavLink>
        <NavLink to="/contact" className='navlink'>Contact </NavLink>
    </nav>
  )}
export default Navbar
