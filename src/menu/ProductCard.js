import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import Counter from './Counter'

const styles = {
  productCard: {
    width: 170,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  productMarkerVeg: {
    float: 'right',
    backgroundColor: '#8baf33'
  },
  productMarkerHit: {
    float: 'right',
    backgroundColor: '#f7cc20'
  },
  productMarkerNone: {
    float: 'right',
    display: 'none'
  },
  productPhoto: {
    width: 170,
    height: 130,
    background: `bottom / contain no-repeat`
  },
  productNumber: {
    display: 'inline-flex'
  },
  productName: {
    margin: 0
  },
  productDescription: {
    margin: 0
  }
}

function ProductCard(props) {
  let marker = (props.product.mark === "Hit") ? styles.productMarkerHit :
               (props.product.mark === "Veg") ? styles.productMarkerVeg :
                styles.productMarkerNone;

  return (
    <div style={styles.productCard}>
      <div className="productWeight">
        {props.product.weight} г.
       
        <div className="productMarker" style={marker}>
          {props.product.mark}
        </div>
      </div>

      <div className="productPhoto" style={styles.productPhoto}>
        <img src={props.product.photo} alt={props.product.name}/>
      </div>

      <div className="productAbout">
        <h1 className="productName" style={styles.productName}>{props.product.name}</h1>
        <p className="productDescription" style={styles.productDescription}>{props.product.description}</p>
      </div>

      <div className="productNumber" style={styles.productNumber}>
        <div className="productPrise">
          {props.product.prise}
          &nbsp;
          <i className="fa fa-rub" />
        </div>
        <Counter />
      </div>
    </div>
  );
}

export default ProductCard;