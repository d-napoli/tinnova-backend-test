import React from 'react'

import {
    Container,
    Text,
    Span
} from './styles'

function Footer() {
    return (
        <Container>
            <Text>Made with ❤️ by <Span>Diego Napoli</Span> - {new Date().getFullYear()}</Text>
        </Container>
    )
}

export default Footer