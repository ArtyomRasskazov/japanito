import React from 'react'

const styles = {
  menuBottom: {
    columnCount: 2,
    listStyleType: 'none',
    paddingLeft: 0
  }
}

function MenuBottom() {
  return (
    <ul style={styles.menuBottom}>
      <li>Рестораны</li>
      <li>Акции</li>
      <li>Новости</li>
      <li>Доставка</li>
      <li>Аренда</li>
      <li>Франшиза</li>
      <li>Вакансии</li>
      <li>Оферта</li>
      <li>Сотрудничество</li>
      <li>Контакты</li>
    </ul>
  )
}

export default MenuBottom;