import React, { useEffect, useState } from 'react';

import Button from '../Button'
import Modal from '../Modal_Group/Modal'

import NewCarForm from '../Forms/NewCar'

import {
    Container,
    Title,
    ModalTitle,
    ModalDescription
} from './styles'

function Header() {
    const [isModalShowing, setModalShowing] = useState(false)

    function handleButtonClick() {
        let modal_status = isModalShowing
        setModalShowing(!modal_status)
    }

    function closeModal() {
        setModalShowing(false)
    }

    return (
        <Container>
            <Modal
                show={isModalShowing}
                modalClosed={closeModal}
            >
                <ModalTitle>Novo Carro</ModalTitle>
                <ModalDescription>Preencha abaixo as informações do novo veículo</ModalDescription>
                <NewCarForm
                    cancelButton={closeModal}
                    actionButtonText="Cadastrar"
                />
            </Modal>
            <Title>Concesionaria</Title>
            <Button
                solid={true}
                click={handleButtonClick}
                text="Novo Carro"
            />
        </Container>
    )
}

export default Header