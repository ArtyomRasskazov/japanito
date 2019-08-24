import React from 'react';
import ProductCard from './app/ProductCard'
import Header from './app/Header'
import Navigation from './app/Navigation'
import Footer from './app/Footer'
import productDataBase from './data/products.json'
import productCategories from './data/categories.json'

import 'font-awesome/css/font-awesome.min.css'

import sushi_main from './data/sushi_main.png'

let space = (document.documentElement.clientWidth-1024) / 2;
let root = document.querySelector(':root');
root.style.setProperty('--padding', `${space}px`);

const styles = {
  app: {
    // paddingLeft: space,
    // paddingRight: space,
  },
  banner: {
    paddingTop: '40px',
    background: `content-box right bottom 25% no-repeat url(${sushi_main})`
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: 'ENG',
      cities: ['St. Petersburg', 'Moscow', 'Omsk', 'California'],
      userName: 'Login',
      maxValueForOrder: 12,
      totalCost: 0,
      orderVisibility: { visibility: 'hidden' }, // visible / hidden
      orderList: {},
      costList: {}
    };

    this.makeCatalog = this.makeCatalog.bind(this);
    this.makeHeading = this.makeHeading.bind(this);
    this.setOrder = this.setOrder.bind(this);
    this.setOrderVisible = this.setOrderVisible.bind(this);
  }

  setOrder(product, prise, op) {
    let orderList = this.state.orderList;
    let costList = this.state.costList;
    let totalCost = this.state.totalCost;

    switch (op) {
      case 'ink':
        if (typeof(orderList[product]) !== 'number') {
          orderList[product] = 0;
          costList[product] = 0;
        };

        orderList[product] = orderList[product] + 1;
        costList[product] = costList[product] + prise;
        totalCost = totalCost + prise;

        break;
      case 'dec':
        orderList[product] = orderList[product] - 1;
        costList[product] = costList[product] - prise;
        totalCost = totalCost - prise;

        if (orderList[product] === 0) {
          delete orderList[product];
          delete costList[product];
        }

        break;
      case 'clr':
        totalCost = totalCost - ( orderList[product] * prise );
        delete orderList[product];
        delete costList[product];

        break;
      default:
        return console.error("Valid third argumet are: 'ink', 'dec' or 'clr'");
    }

    this.setState({orderList: orderList})
    this.setState({costList: costList})
    this.setState({totalCost: totalCost})
  }

  setOrderVisible(visible) {
    let orderVisibility = visible ?
                          { visibility: 'visible' } :
                          { visibility: 'hidden' } ;

    this.setState({orderVisibility: orderVisibility})
  }

  makeOrder() {
    let productsByCategories = Object.keys(productDataBase).map(category => {
        let product = productDataBase[category].map(productData => {
          if (this.state.orderList[productData.id] !== undefined) {
            return (
              <li key={productData.id}>
                <ProductCard productData={productData}
                    value={this.state.orderList[productData.id]}
                    maxValue={this.state.maxValueForOrder}
                    setOrder={this.setOrder}
                    cost={this.state.costList[productData.id]}/>
              </li>
            )
          } else {
            return undefined;
          }
        })

        return (
/* FIXME: Returns twise, then we have two lists. We need one */
          <ul className="OrderList">
            {product}
          </ul>
        )
    })

    return (
      <div className="Order" style={this.state.orderVisibility}>
        <h2>Ваш заказ

          <button type="button"
                  className="closeOrderListButton"
                  onClick={() => (this.setOrderVisible(false))} >
            <i className="fa fa-times red" />
          </button>
        </h2>

        {productsByCategories}
{/* FIXME: set margin-left for checkoutButton (center) and Total cost */}
        <h1>
          Total cost: <strong>{this.state.totalCost} <i className="fa fa-rub" /></strong>
      </h1>

        <input type="button"
               value="Checkout"
               className="checkoutButton"
               disabled={!(this.state.totalCost > 0)} />  {/* may be undefined */}
      </div>
    )
  }

  makeCatalog() { //build list of products from productDataBase (sorted by categories)
    let productsByCategories = Object.keys(productDataBase).map(category => {
        let product = productDataBase[category].map(productData => {
          return (
            <li key={productData.id}>
              <ProductCard productData={productData}
                  value={this.state.orderList[productData.id]}
                  maxValue={this.state.maxValueForOrder}
                  setOrder={this.setOrder}/>
            </li>
          )
        })

        return (
          //if key in productDataBase consist more than one word it crash?
          <li key={category} id={category}>
            <h2>
              {category}
            </h2>
            <ul className="ListOfProducts">
              {product}
            </ul>
          </li>
        )
    })

    return (
      <ul className="ProductsByCategories">
        {productsByCategories}
      </ul>
    )
  }

  makeHeading() {
    let categories = productCategories.map(category => {
      let hrefID = "#" + category.name; //id <li> with category name generated by makeCatalog()
      let liIcon = {backgroundImage: `url(${category.icon})`}

      return (
        <a key={category.name} href={hrefID}>
          <li style={liIcon}> {category.name} </li>
        </a>
      )
    })

    return (
      <ul className="ListOfCategories">
        {categories}
      </ul>
    )
  }

  makeBanner() {
    return (
      <div className="Banner" style={styles.banner}>
        <Navigation />
        <h1>Бесплатная доставка при заказе</h1>
        <h2>от 800 руб.</h2>
        <button>Перейти к заказу</button>
      </div>
    )
  }

  render() {
    return (
      <div className="App" style={styles.app}>
        <Header lang={this.state.lang}
                cities={this.state.cities}
                userName={this.state.userName}
                totalCost={this.state.totalCost}
                makeOrder={this.makeOrder}
                setOrderVisible={this.setOrderVisible}/>

        {this.makeBanner()}
        {this.makeHeading()}
        {this.makeCatalog()}
        {this.makeOrder()}

        <Footer />
      </div>
    );
  }
}

export default App;
