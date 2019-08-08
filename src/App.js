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

function App() {
  return (
    <div className="App" style={styles.app}>
      <AppHeader />
      <Navigation />
      <AppBanner />
      <AppMenu />
      <AppBottom />
    </div>
  );
}

export default App;
