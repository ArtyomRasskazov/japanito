import React from 'react'
import PhoneNumber from './PhoneNumber'
import 'font-awesome/css/font-awesome.min.css'

function Header (props) {
  let cost = props.totalCost;
  if (cost >= 1000) {
      cost = (cost - cost%1000) / 1000 + '\xa0' + cost%1000;
  }

  return (
    <div className="Header">
      <form className="region">
        <input type="radio" name="langSelector" checked={props.lang === 'RU'} />
        <label>RU</label>

        <input type="radio" name="langSelector" checked={props.lang === 'ENG'} />
        <label>ENG  </label>

        <select name="citySelector">
            <option>St. Petersburg</option>
            <option>Moskow</option>
            <option>Omsk</option>
            <option>California</option>
        </select>
      </form>

      <PhoneNumber />

      <button name="userName">{props.userName} &nbsp; &nbsp;
          <i className="fa fa-user red" />
      </button>

      <button name="openOrder"
              onClick={() => (props.setOrderVisible(true))}>
          {cost} &nbsp;
          <i className="fa fa-rub" /> &nbsp; &nbsp;
          <i className="fa fa-shopping-bag white" />
      </button>

    </div>
  );
}

export default Header
