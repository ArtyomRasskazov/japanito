import React from 'react';
import ProductCard from './ProductCard'
import productData from '../product.json'

const styles = {
  productList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
}


function ProductList() {
  return (
    <div style={styles.productList}>
      {productData.map(element => { 
        return (
          <ProductCard product={element}/>
        )
      })}
    </div>
  );
}

export default ProductList;