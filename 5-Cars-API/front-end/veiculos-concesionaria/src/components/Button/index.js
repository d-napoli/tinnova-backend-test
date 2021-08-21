import React from 'react'

import {
    Container,
    Btn
} from './styles'

function Button(props) {
    return (
        <>
            <Btn>
                {props.text}
            </Btn>
        </>
    )
}

export default Button