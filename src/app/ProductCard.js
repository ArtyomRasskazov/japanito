import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

class ProductCard extends React.Component {
  constructor(props) {
    super(props)

    this.makeCounter = this.makeCounter.bind(this);
    this.toOrder = this.toOrder.bind(this);
  }

  toOrder(op) {
    this.props.setOrder(Number(this.props.productData.id), op)
  }

  makeCounter() {
    return (
      <form className="counter">
        <button type="button"
                onClick={() => (this.toOrder('dec'))}
                disabled={!(this.props.value > 0)}>  {/* .value may be undefined! */}
          <i className="fa fa-minus" />
        </button>

        <input type="text" value={this.props.value || 0} readOnly/>

        <button type="button"
                onClick={() => (this.toOrder('ink'))}
                disabled={this.props.value >= this.props.maxValue}>  {/* .value may be undefined! */}
          <i className="fa fa-plus" />
        </button>
      </form>
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
        <div className="prise red"> {this.props.productData.prise}&nbsp;<i className="fa fa-rub" /></div>
        {this.makeCounter()}
      </div>
    )
  }
}

export default ProductCard
