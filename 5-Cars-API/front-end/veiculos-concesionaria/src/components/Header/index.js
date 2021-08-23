import React, { useEffect, useState } from 'react';

import Button from '../Button'
import Modal from '../Modal_Group/Modal'

import NewCarForm from '../Forms/NewCar'

import {
    Container,
    Title,
    ModalTitle,
    ModalDescription,
    Col,
    ModalList,
    ModalFooter,
    ListTitle,
    ListNumber
} from './styles'

function Header(props) {
    const [isCreateModalShowing, setCreateModalShowing] = useState(false)
    const [isReportModalShowing, setReportModalShowing] = useState(false)

    function toggleCreateModal() {
        setCreateModalShowing(!isCreateModalShowing)
    }

    function toggleReportModal() {
        setReportModalShowing(!isReportModalShowing)
    }

    function handleCallBack() {
        props.callBackFunction()
    }

    return (
        <Container>
            <Modal
                show={isCreateModalShowing}
                modalClosed={toggleCreateModal}
            >
                <ModalTitle>Novo Carro</ModalTitle>
                <ModalDescription>Preencha abaixo as informações do novo veículo</ModalDescription>
                <NewCarForm
                    cancelButton={toggleCreateModal}
                    actionType="new"
                    actionButtonText="Cadastrar"
                    callBackFunction={handleCallBack}
                />
            </Modal>

            <Modal
                show={isReportModalShowing}
                modalClosed={toggleReportModal}
            >
                <ModalTitle>Relatórios</ModalTitle>
                <ModalDescription>Quantidade de veículos cadastrados por fabricantes</ModalDescription>
                {
                    props.manufacturerData.map(manufacturer => (
                        <ModalList>
                            <ListTitle>{manufacturer.marca}</ListTitle>
                            <ListNumber>{manufacturer.occurrence}</ListNumber>
                        </ModalList>
                    ))
                }
                <ModalFooter>
                    <Button
                        text="Fechar"
                        click={e => toggleReportModal()}
                    />
                </ModalFooter>
            </Modal>
            <Col>
                <Title>Concesionaria</Title>
            </Col>
            <Col>
                <Button
                    solid={true}
                    click={toggleCreateModal}
                    text="Novo Carro"
                />
                <Button
                    solid={false}
                    click={toggleReportModal}
                    text="Relatórios"
                />
            </Col>
        </Container>
    )
}

export default Header