import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

const styles = {
  phoneNumber: {
    display: 'flex',
    alignItems: 'center',
    height: 40
  }
}

function PhoneNumber() {
  return (
    <div style={styles.phoneNumber}>
      <i className="fa fa-phone" />
      8-800-900-500-5
    </div>
  )
}

export default PhoneNumber;