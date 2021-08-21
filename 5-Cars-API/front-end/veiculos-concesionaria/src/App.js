import React, { useEffect, useState } from 'react';

import GlobalStyle from './styles/globals';
import Button from './components/Button'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8000/', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])

  return (
    <div>
      <GlobalStyle />
      <Button
        text="Novo Carro"
      />
    </div>
  );
}

export default App;