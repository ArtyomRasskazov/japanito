import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

const styles = {
  cartButton: {
    display: 'flex',
    alignItems: 'center',
    height: 40
  }
}

function CartButton(props) {
  let cost = props.totalCost;

  // add space between thousands and hundreds
  if (cost >= 1000) {
      cost = (cost - cost%1000) / 1000 + '\xa0' + cost%1000;
  }

  return (
    <div style={styles.cartButton}>
      {cost} &nbsp;
      <i className="fa fa-rub" /> &nbsp; &nbsp;
      <i className="fa fa-shopping-bag" />
    </div>
  )
}

export default CartButton;
