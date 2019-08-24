/* Stylize the ProductCard implementation for order list #3
* DONE: compose ProductCard when it in Order
* DONE: make the weight and the mark is hidden
* DONE: make prise is calculate
* DONE: add 'clear' button
* DONE: insert "Total discounted"
* DONE: add button "Checkout"
* DONE: add button for closing (may be in H2)
* DONE: add paddings
* DONE: showing onClick the button Card
* IDEA: Remake h2 to h1 and ProductName is h2 in Decscription
* IDEA: clearButton visible only ProductCard:hover
*/

import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

class ProductCard extends React.Component {
  constructor(props) {
    super(props)

    this.makeCounter = this.makeCounter.bind(this);
    this.makeClearButton = this.makeClearButton.bind(this);
    this.toOrder = this.toOrder.bind(this);
  }

  toOrder(op) {
    this.props.setOrder( Number(this.props.productData.id),
                         Number(this.props.productData.prise),
                         op )
  }

  makeCounter() {
    return (
      <form className="counter">
        <button type="button"
                className="decrementButton"
                onClick={() => (this.toOrder('dec'))}
                disabled={!(this.props.value > 0)}>  {/* .value may be undefined! */}
          <i className="fa fa-minus" />
        </button>

        <input type="text" value={this.props.value || 0} readOnly/>

        <button type="button"
                className="inkrementButton"
                onClick={() => (this.toOrder('ink'))}
                disabled={this.props.value >= this.props.maxValue}>  {/* .value may be undefined! */}
          <i className="fa fa-plus" />
        </button>
      </form>
    )
  }

  makeClearButton() {
    return (
      <button type="button"
              className="clearButton"
              onClick={() => (this.toOrder('clr'))}
              disabled={!(this.props.value > 0)}>  {/* .value may be undefined! */}
        <i className="fa fa-times-circle red" />
      </button>
    )
  }

  render() {
    let photo = {
      backgroundImage: `url(${this.props.productData.photo})`
    }

    let marker = (this.props.productData.mark === "Hit") ? {backgroundColor: `#f7cc20`} :
                 (this.props.productData.mark === "Veg") ? {backgroundColor: `#8baf33`} :
                 {backgroundColor: `none`};

    return (
      <div className="ProductCard">
        <div className="weight"> {this.props.productData.weight} g. </div>
        <div className="mark white" style={marker}> {this.props.productData.mark} </div>
        <div className="name" style={photo}> {this.props.productData.name} </div>
        <div className="description"> {this.props.productData.description} </div>
        <div className="prise red">
          {/* .cost is passed only for OrderList, then for catalog rendering just prise*/}
          {this.props.cost || this.props.productData.prise}
          &nbsp;<i className="fa fa-rub" />
        </div>
        {this.makeCounter()}
        {this.makeClearButton()}
      </div>
    )
  }
}

export default ProductCard
