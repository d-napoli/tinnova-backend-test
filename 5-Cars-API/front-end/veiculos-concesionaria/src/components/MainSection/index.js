import React, {useEffect} from 'react'

import {
    Container,
    Row,
    CardsWrapper,
    Col_Half
} from './styles'

import CarList from '../CarsList'
import InfoCardItem from '../InfoCardItem'

function MainSection(props) {
    function handleCallBack() {
        props.callBackFunction()
    }

    return (
        <Container>
            <Row>
                <CardsWrapper>
                    <InfoCardItem
                        cardTitle="Veículos Não Vendidos"
                        bigNumber={props.carsNotSold}
                    />
                    <InfoCardItem
                        cardTitle="Veículos Vendidos"
                        bigNumber={props.carsSold}
                    />
                    <InfoCardItem
                        cardTitle="Total"
                        bigNumber={props.carsSold + props.carsNotSold}
                    />
                </CardsWrapper>
            </Row>
            <Row>
                <CarList
                    cars={props.cars}
                    callBackFunction={handleCallBack}
                />
            </Row>
        </Container>
    )
}

export default MainSection