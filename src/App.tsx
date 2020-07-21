import React, { Component } from 'react';

import Header from './components/Header';
import MobileHeader from './components/MobileHeader'
import GlobalStyle from './globalStyle';
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  const windowWidth = window.innerWidth;
  return (
    <>
      {
        windowWidth < 500 ? <MobileHeader /> : <Header />
      }
      <GlobalStyle />
      <Login />
      <Footer />
    </>
  );
}

export default App;
