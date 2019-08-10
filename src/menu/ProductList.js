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

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  render(props) {
    
    return (
      <div style={styles.productList}>
        {productData.map(element => {
          return (
            <ProductCard product={element} key={element.id} orderList={this.props.orderList}/>
          )
        })}
      </div>
    );
  }
}

export default ProductList;
