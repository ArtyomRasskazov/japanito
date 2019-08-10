import React from 'react';
import AppHeader from './header/AppHeader'
import Navigation from './navigation/Navigation'
import AppBanner from './banner/AppBanner'
import AppMenu from './menu/AppMenu'
import AppBottom from './bottom/AppBottom'

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Login',
      totalCost: 0,
      orderList: {}
    }
  }

  orderSet(id, count) {
    count ?
    this.setState(orderList[id]) = count :
    delete this.props.orderList[this.state.id];
  }

  render() {
    return (
      <div className="App" style={styles.app}>
        <AppHeader userName={this.state.userName} totalCost={this.state.totalCost}/>
        <Navigation />
        <AppBanner />
        <AppMenu orderList={this.state.orderList}/>
        <AppBottom />
      </div>
    );
  }
}

export default App;
