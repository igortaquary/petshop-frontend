import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import MobileHeader from './components/MobileHeader'
import GlobalStyle from './globalStyle';
import Footer from './components/Footer';
import Routes from './Routes';
import CartProvider from './hooks/cartHook';

function App() {
  const windowWidth = window.innerWidth;
  return (
    <>

      <GlobalStyle />
      <BrowserRouter>
        <CartProvider>
          {windowWidth < 600 ? <MobileHeader /> : <Header />}
          <Routes />
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
