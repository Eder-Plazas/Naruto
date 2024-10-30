import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <ul className="navbar-list">
        <Link to="/" className="li-nav">Inicio</Link>
        <Link to="/favoritos" className="li-nav">Favoritos</Link>
      </ul>
  )
}

export default NavBar
