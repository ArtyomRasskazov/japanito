import React from 'react'
import logo from '../icons/logo.png'
import PhoneNumber from '../header/PhoneNumber'

const styles = {
  contactsBottom: {
    // 
  },
  contactsBottomLogo: {
    width: 201,
    height: 44,
    background: `url(${logo})`
  },
  contactsBottomLinks: {
    display: 'inline-flex',
    listStyleType: 'none',
    paddingLeft: 0
  }
}

function ContactsBottom() {
  return (
    <div style={styles.contactsBottom}>
      <div style={styles.contactsBottomLogo} />
      <PhoneNumber />
      <ul style={styles.contactsBottomLinks} >
        <li>vk</li>
        <li>fb</li>
        <li>insta</li>
      </ul>
    </div>
  )
}

export default ContactsBottom;