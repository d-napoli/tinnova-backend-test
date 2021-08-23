import React from 'react'

import {
    Container,
    CardHeader,
    CardTitle,
    CardBody,
    CardNumber
} from './styles'

function InfoCardItem(props) {
    return (
        <Container>
            <CardHeader>
                <CardTitle>{props.bigNumber}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardNumber>{props.cardTitle}</CardNumber>
            </CardBody>
        </Container>
    )
}

export default InfoCardItem