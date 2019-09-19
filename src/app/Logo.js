/**
  * Function retrns a logo component
  */

import React from 'react'
import logo from '../data/logo.png'

function Logo() {
  return (
    <div className="Logo">
      <a href="#main">
        <img src={logo} alt="logo" />
      </a>
    </div>
  )
}

export default Logo;
