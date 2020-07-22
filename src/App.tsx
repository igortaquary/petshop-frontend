import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import MobileHeader from './components/MobileHeader'
import GlobalStyle from './globalStyle';
import Footer from './components/Footer';
import Login from './pages/Login';
import Routes from './Routes';

function App() {
  const windowWidth = window.innerWidth;
  return (
    <>

      <GlobalStyle />
      <BrowserRouter>
        {windowWidth < 500 ? <MobileHeader /> : <Header />}
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
