import React from 'react';

import {
    Modal
} from './styles'

import BackDrop from '../BackDrop';

const modal = (props) => (
    <>
        <BackDrop show={props.show} clicked={props.modalClosed} />
        <Modal
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </Modal>
    </>
);

export default modal;