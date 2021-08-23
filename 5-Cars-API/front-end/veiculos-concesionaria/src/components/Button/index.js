import React from 'react'

import {
    Btn
} from './styles'

import Icon from '../Icon'

function Button(props) {
    return (
        <>
            <Btn
                onClick={props.click}
                solid={props.solid ? true : false}
            >
                {
                    props.icon ? 
                    <>
                        <Icon
                            size={props.size ? props.size : "18"}
                            color={props.color ? props.color : "#fff"}
                            icon={props.icon}
                        /><span>&nbsp;</span>
                    </>
                    : ""
                }
                {props.text}
            </Btn>
        </>
    )
}

export default Button