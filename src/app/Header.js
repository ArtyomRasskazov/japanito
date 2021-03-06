import React from 'react'
import PhoneNumber from './PhoneNumber'
import 'font-awesome/css/font-awesome.min.css'
import arrowDown from '../data/caret-down-solid.svg'

const styles = {
  citySelector: {
    height: '100%',
    width: '110%',
    background: `right / 50% 50% no-repeat url(${arrowDown})`
  }
}

function Header (props) {
  let cost = props.totalCost;
  if (cost >= 1000) {
// FIXME: when cost = 1023 it displays "1 23" becouse cost%1000 = 23  
      cost = (cost - cost%1000) / 1000 + '\xa0' + cost%1000;
  }

  function  makeList(cities) {
    let makeOption = Object.keys(cities).map( cityID => {
      return (
        <option key={cityID} value={cityID}>
          {cities[cityID]}
        </option>
      )
    })

    return (
      <select name="citySelector"
              style={styles.citySelector} onChange={props.setRegion}>
        {makeOption}
      </select>
    )
  };

  return (
    <div className="Header">
      <form className="region">
        <button type="button"
                className="ruButton"
                onClick={() => (props.setLocale('RU'))}
                disabled={props.lang === 'RU'} >
          RU
        </button>

        <button type="button"
                className="engButton"
                onClick={() => (props.setLocale('ENG'))}
                disabled={props.lang === 'ENG'}>
          ENG
        </button>

        <div className="wrapper">
          {makeList(props.cities)}
        </div>
      </form>

      <PhoneNumber />

      <button name="userName">{props.userName} &nbsp; &nbsp;
          <i className="fa fa-user red" />
      </button>

      <button className="red" name="openOrder"
              onClick={() => (props.setOrderVisible(true))}>
          {cost} &nbsp;
          <i className="fa fa-rub" /> &nbsp; &nbsp;
          <i className="fa fa-shopping-bag white" />
      </button>

    </div>
  );
}

export default Header
