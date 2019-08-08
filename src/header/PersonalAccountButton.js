import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

const styles = {
  personalAccountButton: {
    display: 'flex',
    alignItems: 'center',
    height: 40
  }
}

function PersonalAccountButton() {
  return (
    <div style={styles.personalAccountButton}>
      Александр
      <i className="fa fa-user" />
    </div>
  )
}

export default PersonalAccountButton;