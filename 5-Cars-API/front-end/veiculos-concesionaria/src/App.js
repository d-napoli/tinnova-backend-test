import React, { useEffect, useState } from 'react';

import MainSection from './components/MainSection'
import Header from './components/Header'
import Footer from './components/Footer'

import GlobalStyle from './styles/globals';
import { keyframes } from 'styled-components';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [Cars, setCars] = useState([]);
  const [dataUpdated, setDataUpdated] = useState(false)
  const [carsNotSold, setcarsNotSold] = useState(0)
  const [carsSold, setCarsSold] = useState(0)
  const [manufacturerData, setManufacturerData] = useState([])

  const getAllCars = async () => {
      try {
          const response = await fetch('http://localhost:8000/veiculos/', {mode:'cors'});
          const data = await response.json();
          setIsLoaded(true)
          setCars(data)
          getCarsNotSold(data)
          setManufacturerData(findOcc(data, "marca"))
      }
      catch (e) {
          setIsLoaded(true)
          setError(e)
          console.log(e)
      }

      setDataUpdated(false)
  }

  function getCarsNotSold(cars) {
    let count_nao_vendidos = 0
    let count_vendidos = 0
    for (const [key, value] of Object.entries(cars)) {
      if (!value['vendido'])
        count_nao_vendidos += 1
      else
        count_vendidos += 1
      setcarsNotSold(count_nao_vendidos)
      setCarsSold(count_vendidos)
    }
  }

  function findOcc(arr, key){
    let arr2 = [];
      
    arr.forEach((x)=>{
       if(arr2.some((val)=>{ return val[key] == x[key] })){
         arr2.forEach((k)=>{
           if(k[key] === x[key]){ 
             k["occurrence"]++
           }
        })
           
       }
       else{
         let a = {}
         a[key] = x[key]
         a["occurrence"] = 1
         arr2.push(a);
       }
    })
      
    return arr2
  }

  useEffect(() => {
    getAllCars();
  }, [dataUpdated]);

  return (
    <div>
      <GlobalStyle />
      <Header
        callBackFunction={setDataUpdated}
        manufacturerData={manufacturerData}
      />
      {
        error ? <p>{error}</p>
        : isLoaded ?
          <MainSection
            cars={Cars}
            callBackFunction={setDataUpdated}
            isLoaded={isLoaded}
            carsNotSold={carsNotSold}
            carsSold={carsSold}
          /> 
        : <p>Carregando...</p>
      }
      <Footer />
    </div>
  );
}

export default App;