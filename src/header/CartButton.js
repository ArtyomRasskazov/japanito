import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

const styles = {
  cartButton: {
    display: 'flex',
    alignItems: 'center',
    height: 40
  }
}

function CartButton() {
  return (
    <div style={styles.cartButton}>
      2500
      <i className="fa fa-rub" />
      <i className="fa fa-shopping-bag" />
    </div>
  )
}

export default CartButton;