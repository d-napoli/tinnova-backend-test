import React, { useEffect, useState } from 'react';

import MainSection from './components/MainSection'
import Header from './components/Header'
import Footer from './components/Footer'

import GlobalStyle from './styles/globals';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;