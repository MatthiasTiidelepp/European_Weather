import React from 'react'
import logo from '../assets/E_sun.svg'

// Component for displaying the name logo as a header
const Header = () => {
  return (
    <header className="headerContainer">
      <img className="logoImage" src={logo} alt="An icon with letter E and the sun" />
    </header>
  )
}

export default Header
