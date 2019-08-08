import React from 'react'
import logo from '../icons/logo.png'

const styles = {
  navigation: {
    // width: 1024,
    padding: '35px 0px',
    background: `left no-repeat url(${logo})`
  },
  navigationMenu: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 0,
    paddingLeft: 0
  },
  navigationItem: {
    listStyleType: 'none',
    paddingLeft: 0
  }
}

function Navigation() {
  return (
    <nav style={styles.navigation}>
      <ui style={styles.navigationMenu}>
        <li style={styles.navigationItem}>Главная</li>
        <li style={styles.navigationItem}>Меню</li>
        <li style={styles.navigationItem}>Новости</li>
        <li style={styles.navigationItem}>Акции</li>
        <li style={styles.navigationItem}>Рестораны</li>
        <li style={styles.navigationItem}>География доставки</li>
      </ui>
    </nav>   
  )
}

export default Navigation;