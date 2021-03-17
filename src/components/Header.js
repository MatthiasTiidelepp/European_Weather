import React from 'react'
import logo from '../assets/E_sun.svg'

// Component for displaying the name logo as a header
const Header = () => {
  return (
    <header className="headerContainer">
      <img className="logoImage" src={logo} alt="text european weather with a sun" />
    </header>
  )
}

export default Header
