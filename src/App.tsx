import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import Header from './components/Header';
import GlobalStyle from './globalStyle';
import Footer from './components/Footer';
import Routes from './Routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
