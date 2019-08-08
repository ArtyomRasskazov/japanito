import React from 'react'

const styles = {
  selectCity: {
    display: 'flex',
    alignItems: 'center',
    height: 40
  }
}

function SelectCity() {
  return (
    <select size={1} style={styles.selectCity}>
      <option>Санкт-Петербург</option>
      <option>Москва</option>
      <option>Омск</option>
    </select>
  )
}

export default SelectCity;