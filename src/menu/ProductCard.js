import React from 'react';
import 'font-awesome/css/font-awesome.min.css'

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
  },
  counter: {
    display: 'inline-flex'
  }
}

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.product.id,
      count: 0
    };
  }



  addOne() {
    if (this.state.count < 12) {
      this.setState({
        count: this.state.count + 1
      })

      this.orderSet()
    }
  }

  delOne() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }

    this.orderSet()
  }

  render(props) {
    console.log(this.props.orderList);
    let marker = (this.props.product.mark === "Hit") ? styles.productMarkerHit :
                 (this.props.product.mark === "Veg") ? styles.productMarkerVeg :
                  styles.productMarkerNone;

    return (
      <div style={styles.productCard}>
        <div className="productWeight">

          {this.props.product.weight} г.

          <div className="productMarker" style={marker}>
            {this.props.product.mark}
          </div>
        </div>

        <div className="productPhoto" style={styles.productPhoto}>
          <img src={this.props.product.photo} alt={this.props.product.name}/>
        </div>

        <div className="productAbout">
          <h1 className="productName" style={styles.productName}>{this.props.product.name}</h1>
          <p className="productDescription" style={styles.productDescription}>{this.props.product.description}</p>
        </div>

        <div className="productNumber" style={styles.productNumber}>
          <div className="productPrise">
            {this.props.product.prise}
            &nbsp;
            <i className="fa fa-rub" />
          </div>

          <div className="counter" style={styles.counter}>
            <button className="counterDecrement" onClick={() => this.delOne()}>-</button>
            <p className="countValue">{this.state.count}</p>
            <button className="counterIncrement" onClick={() => this.addOne()}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
