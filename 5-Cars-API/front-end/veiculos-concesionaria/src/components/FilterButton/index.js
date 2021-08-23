import React from 'react'

import {
    Container,
    Button
} from './styles'

function FilterButton(props) {
    return (
        <Container>
            <Button
                onClick={props.click}
                active={props.active}
            >
                {props.text}
            </Button>
        </Container>
    )
}

export default FilterButton