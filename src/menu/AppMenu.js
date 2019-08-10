import React from 'react';
import ProductList from './ProductList'

let widthContent = (document.documentElement.clientWidth-1024) / 2;

const styles = {
  appMenu: {
    display: 'flex',
    justifyContent: 'center',
    background: 'white',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3)',
    paddingLeft: widthContent,
    paddingRight: widthContent
  }
}

function AppMenu(props) {
  return (

    <div style={styles.appMenu}>
      <ProductList  orderList={props.orderList}/>
    </div>
  );
}

export default AppMenu;
