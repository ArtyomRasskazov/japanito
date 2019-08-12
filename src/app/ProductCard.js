import React from 'react'

class ProductCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.makeCounter = this.makeCounter.bind(this);
    this.toOrder = this.toOrder.bind(this);
  }

  toOrder(op) {
    this.props.setOrder(Number(this.props.productData.id), op)
  }

  makeCounter() {
    return (
      <form className="counter">
        <input type="button" value={"-"}
               onClick={() => (this.toOrder('dec'))}
               disabled={!(this.props.value > 0)}/>  {/* .value may be undefined! */}
        <input type="text" value={this.props.value || 0} readOnly/>
        <input type="button" value={"+"}
               onClick={() => (this.toOrder('ink'))}
               disabled={this.props.value >= this.props.maxValue}/>  {/* .value may be undefined! */}
      </form>
    )
  }

  render() {
    let photo = {
      backgroundImage: `url(${this.props.productData.photo})`
    }
    return (
      <div className="ProductCard" style={photo}>
        <div className="name"> {this.props.productData.name} </div>
        <div className="description"> {this.props.productData.description} </div>
        <div className="weight"> {this.props.productData.weight} </div>
        <div className="prise"> {this.props.productData.prise} </div>
        <div className="mark"> {this.props.productData.mark} </div>
        {this.makeCounter()}
      </div>
    )
  }
}

export default ProductCard
