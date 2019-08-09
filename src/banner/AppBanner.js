import React from 'react'
import sushi_main from '../images/sushi_main.png'
import { relative } from 'path';

let widthContent = (document.documentElement.clientWidth-1024) / 2;

const styles = {
  appBanner: {
    width: 1024,
    background: `right no-repeat url(${sushi_main})`,
    paddingTop: 75,
    paddingBottom: 150,
    paddingLeft: widthContent,
    paddingRight: widthContent
  },
  bannerHeader: {
    position: relative,
    width: 500,
    margin: 0,
    marginBottom: 35,
    color: 'white',
    fontSize: '32px',
    fontWeight: 700
  },
  bannerH2: {
    display: 'inline',
    fontSize: '24px'
  }
}

function AppBanner() {
  return (
    <div style={styles.appBanner}>
      <div style={styles.bannerHeader}>
        Бесплатная доставка при заказе
        <h2 style={styles.bannerH2}> от 800 руб.</h2>
      </div>
      <button>Перейти к заказу</button>
    </div>
  )
}

export default AppBanner;