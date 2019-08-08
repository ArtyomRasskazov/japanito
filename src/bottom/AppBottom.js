import React from 'react'
import ContactsBottom from './ContactsBottom'
import MenuBottom from './MenuBottom'
import FormsBottom from './FormsBottom'

const styles = {
  appBottom: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    // width: 1024,
    backgroundColor: 'white'
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