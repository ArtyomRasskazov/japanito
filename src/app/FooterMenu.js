import React from 'react'

function FooterMenu(props) {
  let restaurants,
      stocks,
      news,
      delivery,
      rent,
      franchise,
      vacancies,
      offer,
      cooperation,
      contacts;

  switch (props.lang) {
    case 'RU':
      restaurants = 'Рестораны';
      stocks = 'Акции';
      news = 'Новости';
      delivery = 'Доставка';
      rent = 'Аренда';
      franchise = 'Франшиза';
      vacancies = 'Вакансии';
      offer = 'Оферта';
      cooperation = 'Сотрудничество';
      contacts = 'Контакты';
      break;

    default:
      restaurants = 'Restaurants';
      stocks = 'Stocks';
      news = 'News';
      delivery = 'Delivery';
      rent = 'Rent';
      franchise = 'Franchise';
      vacancies = 'Vacancies';
      offer = 'Offer';
      cooperation = 'Cooperation';
      contacts = 'Contacts';
  }

  return (
    <ul className="FooterMenu">
      <li>{restaurants}</li>
      <li>{stocks}</li>
      <li>{news}</li>
      <li>{delivery}</li>
      <li>{rent}</li>
      <li>{franchise}а</li>
      <li>{vacancies}</li>
      <li>{offer}</li>
      <li>{cooperation}</li>
      <li>{contacts}</li>
    </ul>
  )
}

export default FooterMenu;
