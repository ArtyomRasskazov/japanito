import React from 'react'
import Logo from './Logo'

function Navigation() {
  return (
    <nav className="Navigation">
      <Logo />
      <ul>
        <li>
          <a href="#main">Главная</a>
        </li>
        <li>
          <a href="#menu">Меню</a>
        </li>
        <li>
          <a href="#news">Новости</a>
        </li>
        <li>
          <a href="#stocks">Акции</a>
        </li>
        <li>
          <a href="#restaurants">Рестораны</a>
        </li>
        <li>
          <a href="#deliveryGeography">География доставки</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
