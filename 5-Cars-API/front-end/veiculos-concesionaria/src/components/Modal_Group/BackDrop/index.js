import React from 'react'

import {
    Backdrop
} from './styles'

function BackDrop(props) {
    return (
        <>
        {
            props.show ?
                <Backdrop
                    onClick={props.clicked}
                />
            : ""
        }
        </>
    )
}

export default BackDrop