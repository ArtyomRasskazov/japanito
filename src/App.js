import React from 'react';
import ProductCard from './app/ProductCard'
import Header from './app/Header'
import Navigation from './app/Navigation'
import Footer from './app/Footer'
import productDataBase from './data/products.json'
import productCategories from './data/categories.json'

import 'font-awesome/css/font-awesome.min.css'

import sushi_main from './data/sushi_main.png'

// TODO: Delete unused files, build production and merge to master
// FIXME: Problems when zooming

// IDEA: Restructuring (new brunch)
// - [ ] Create database for all texts including phone number and copyright
// - [ ] Try make state.locale with function once before rendering
// - [ ] Rewrite Footer using a grid
// - [ ] Make something like <div><h2>name</h2>description</div> in ProductCard
// - [ ] Split into smaller components
// - [ ] Remake css following the "Styling in react"
// - [ ] Use font-awesome 5
// - [ ] Make documentation (use JSDoc)
// - [ ] Try color *.svg when it background

let space = (document.documentElement.clientWidth-1024) / 2;
let root = document.querySelector(':root');
root.style.setProperty('--padding', `${space}px`);

const styles = {
  bannerImage: {
    backgroundImage: `url(${sushi_main})`
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: {
        lang: 'ENG',
        name: 'name',
        description: 'description',
        g: 'g.',
        filter: 'Filter',
        totalCost: 'Total cost:',
        categories: {
          Roll: "Roll",
          Sushi: "Sushi",
          Set: "Set",
          Noodles: "Noodles",
          Soup: "Soup"
        },
        cities: {
          moscow: 'Moscow',
          stPetersburg: 'St. Petersburg',
          omsk: 'Omsk'
        }
      },
      currentCity: 'moscow',
      cities: {
        moscow: 'Moscow',
        stPetersburg: 'St. Petersburg',
        omsk: 'Omsk'
      },
      cities_ru: {
        moscow: 'Москва',
        stPetersburg: 'Санкт Петербург',
        omsk: 'Омск'
      },
      userName: 'Login',
      maxValueForOrder: 12,
      totalCost: 0,
      orderVisibility: { visibility: 'hidden' },
      orderList: {},
      costList: {}
    };

    this.makeCatalog = this.makeCatalog.bind(this);
    this.makeHeading = this.makeHeading.bind(this);
    this.setOrder = this.setOrder.bind(this);
    this.setOrderVisible = this.setOrderVisible.bind(this);
    this.setRegion = this.setRegion.bind(this);
    this.setLocale = this.setLocale.bind(this);
  }

  setLocale(value) {
  // QUESTION: Why it event doesn't work when I used input radio?
  // <input type="radio"
  //        name="langSelector"
  //        value="ENG"
  //        onChange={props.setLocale}
  //        checked={props.lang === 'ENG'} />
  // Now I use just button and onClick

    let locale = this.state.locale;

    switch (value) {
      case 'RU':
        locale.lang = 'RU'
        locale.name = 'name_ru'
        locale.description = 'description_ru'
        locale.g = 'г.'
        locale.filter = 'Фильтр'
        locale.totalCost = 'Итого со скидкой:'
        locale.cities = this.state.cities_ru
        break;

      default:
        locale.lang = 'ENG'
        locale.name = 'name'
        locale.description = 'description'
        locale.g = 'g.'
        locale.filter = 'Filter'
        locale.totalCost = 'Total cost:'
        locale.cities = this.state.cities
    }
    // eslint-disable-next-line
    productCategories.map(category => {
      locale.categories[category.name] = category[locale.name]
    })

    this.setState({locale: locale});
  }

  setRegion(event) {
    if (this.state.cities.hasOwnProperty(event.target.value)) {
      this.setState({currentCity: event.target.value});
    }
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
                    name={this.state.locale.name}
                    description={this.state.locale.description}
                    g={this.state.locale.g}
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

        return product
    })

    return (
      <div className="Order" style={this.state.orderVisibility}>
        <h1>Ваш заказ

          <button type="button"
                  className="closeOrderListButton"
                  onClick={() => (this.setOrderVisible(false))} >
            <i className="fa fa-times" />
          </button>
        </h1>

        <ul className="OrderList">
          {productsByCategories}
        </ul>

        {/* FIXME: set margin-left forTotal cost */}
        <h2>
          {this.state.locale.totalCost}<strong>{this.state.totalCost} <i className="fa fa-rub" /></strong>
        </h2>

        <input type="button"
               value="Checkout"
               className="checkoutButton red"
               disabled={!(this.state.totalCost > 0)} />  {/* may be undefined */}
      </div>
    )
  }

  makeCatalog() { //build list of products from productDataBase (sorted by categories)
    let productsByCategories = Object.keys(productDataBase).map(category => {

      let categoryName = this.state.locale.categories[category];

        let product = productDataBase[category].map(productData => {
          return (
            <li key={productData.id}>
              <ProductCard productData={productData}
                  name={this.state.locale.name}
                  description={this.state.locale.description}
                  g={this.state.locale.g}
                  value={this.state.orderList[productData.id]}
                  maxValue={this.state.maxValueForOrder}
                  setOrder={this.setOrder}/>
            </li>
          )
        })

        return (

// QUESTION: if key in productDataBase consist more than one word it crash?

          <li key={category} id={category}>
            <h1>
              {categoryName}
              <button type="button">
                <h2>{this.state.locale.filter}</h2>
                <i className="fa fa-plus" />
              </button>
            </h1>
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
        <li key={category.name} style={liIcon}>
          <a href={hrefID}>
            <h1>
              {category[this.state.locale.name]}
            </h1>
          </a>
        </li>
      )
    })

    return (
      <ul className="ListOfCategories">
        {categories}
      </ul>
    )
  }

  makeBanner() {
    let message, buttonValue;

    switch (this.state.locale.lang) {
      case 'RU':
        message = (
            <p>
              Бесплатная доставка при заказе
              <span> от 800 руб.</span>
            </p>
          )

        buttonValue = 'Перейти к заказу';
        break;

      default:
        message = (
          <p>
            Free shipping on orders
            <span> over 800 rubles.</span>
          </p>
        );

        buttonValue = 'Go to order';
    }

    return (
      <div className="Banner" style={styles.bannerImage}>
        <Navigation lang={this.state.locale.lang}/>
        {message}
        <button className="red">{buttonValue}</button>
      </div>
    )
  }


  render() {
    return (
      <div className="App" style={styles.app}>
        <Header lang={this.state.locale.lang}
                currentCity={this.state.currentCity}
                cities={this.state.locale.cities}
                userName={this.state.userName}
                totalCost={this.state.totalCost}
                makeOrder={this.makeOrder}
                setOrderVisible={this.setOrderVisible}
                setRegion={this.setRegion}
                setLocale={this.setLocale}/>

        {this.makeBanner()}
        {this.makeHeading()}
        {this.makeCatalog()}
        {this.makeOrder()}

        <Footer lang={this.state.locale.lang}/>
      </div>
    );
  }
}

export default App;
