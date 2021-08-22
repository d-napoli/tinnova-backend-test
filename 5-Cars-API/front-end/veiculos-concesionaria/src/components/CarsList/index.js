import React, { useEffect, useState } from 'react';

import CarItem from '../CarItem'

import {
    Container
} from './styles'

function CarsList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const makeAPICall = async () => {
        try {
            const response = await fetch('http://localhost:8000/veiculos/', {mode:'cors'});
            const data = await response.json();
            setIsLoaded(true)
            setItems(data)
            console.log({ data })
        }
        catch (e) {
            setIsLoaded(true)
            setError(e)
            console.log(e)
        }
    }

    useEffect(() => {
        makeAPICall();
    }, []);

    return (
        <Container>
            
            {
                error ? <p>{error}</p> :
                isLoaded ?
                items.map(item => (
                    <CarItem
                        key={item.id}
                        id={item.id}
                        veiculo={item.veiculo}
                        marca={item.marca}
                        ano={item.ano}
                        descricao={item.descricao}
                        vendido={item.vendido}
                    />
                ))  
                : <p>Carregando...</p>
            }
        </Container>
    )
}

export default CarsList;