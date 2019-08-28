import React from 'react'
import Logo from './Logo'

function Navigation(props) {
  let main, menu, news, stocks, restaurants, deliveryGeography;

  switch (props.lang) {
    case 'ru':
      main = 'Главная';
      menu = 'Меню';
      news = 'Новости';
      stocks = 'Акции';
      restaurants = 'Рестораны';
      deliveryGeography = 'География доставки';
      break;

    default:
      main = 'Main';
      menu = 'Menu';
      news = 'News';
      stocks = 'Stocks';
      restaurants = 'Restaurants';
      deliveryGeography = 'Delivery georaphy';
  }

  return (
    <nav className="Navigation">
      <Logo />
      <ul>
        <li>
          <a href="#main">{main}</a>
        </li>
        <li>
          <a href="#menu">{menu}</a>
        </li>
        <li>
          <a href="#news">{news}</a>
        </li>
        <li>
          <a href="#stocks">{stocks}</a>
        </li>
        <li>
          <a href="#restaurants">{restaurants}</a>
        </li>
        <li>
          <a href="#deliveryGeography">{deliveryGeography}</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
