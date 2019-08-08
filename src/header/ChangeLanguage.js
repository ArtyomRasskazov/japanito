import React from 'react'

const styles = {
  changeLanguage: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    margin: 0,
    paddingLeft: 0
  },
  changeLanguageItem: {
    paddingLeft: 0
  }
}

function ChangeLanguage() {
  return (
    <ul style={styles.changeLanguage}>
      <ol style={styles.changeLanguageItem}>RU</ol>
      <ol style={styles.changeLanguageItem}>ENG</ol>
    </ul>
  )
}

export default ChangeLanguage;