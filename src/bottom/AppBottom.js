import React from 'react'
import ContactsBottom from './ContactsBottom'
import MenuBottom from './MenuBottom'
import FormsBottom from './FormsBottom'

let widthContent = (document.documentElement.clientWidth-1024) / 2;

const styles = {
  appBottom: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    // width: 1024,
    backgroundColor: 'white',
    paddingLeft: widthContent,
    paddingRight: widthContent
  }
}

function AppBottom() {
  return (
    <div style={styles.appBottom}>
      <ContactsBottom />
      <MenuBottom />
      <FormsBottom />
    </div>
  )
}

export default AppBottom;