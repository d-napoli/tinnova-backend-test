import React from 'react'

import {
    Container,
    Btn
} from './styles'

function Button(props) {
    return (
        <>
            <Btn
                onClick={props.click}
                solid={props.solid ? true : false}
            >
                {props.text}
            </Btn>
        </>
    )
}

export default Button