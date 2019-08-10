import React from 'react'
import ChangeLanguage from '../header/ChangeLanguage'
import SelectCity from '../header/SelectCity'
import PhoneNumber from '../header/PhoneNumber'
import PersonalAccountButton from '../header/PersonalAccountButton'
import CartButton from '../header/CartButton'

let widthContent = (document.documentElement.clientWidth-1024) / 2;

const styles = {
  appHeader: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: 'white',
    paddingLeft: widthContent,
    paddingRight: widthContent
  }
}

function AppHeader(props) {
  return (
    <div style={styles.appHeader}>
      <ChangeLanguage />
      <SelectCity />
      <PhoneNumber />
      <PersonalAccountButton userName={props.userName}/>
      <CartButton totalCost={props.totalCost}/>
    </div>
  )
}

export default AppHeader;
