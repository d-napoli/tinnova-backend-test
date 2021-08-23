import React, { useState, useEffect } from 'react';

import Button from '../Button'
import Modal from '../Modal_Group/Modal'

import UpdateCarForm from '../Forms/NewCar'

import {
    Container,
    Header,
    Title,
    YearTag,
    Tag,
    Body,
    Description,
    Footer,
    ModalTitle,
    ModalDescription,
    ModalHeader,
    ModalFooter
} from './styles'

function CarItem(props) {
    const [isDeleteModalShowing, setDeleteModalShowing] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalDescription, setModalDescription] = useState("")
    const [isDeleteModal, setIsDeleteModal] = useState(false)
    const [createdDate, setCreatedDate] = useState("")

    let description_limit = 150

    function handleCallBack() {
        props.callBackFunction()
    }

    function formatDate() {
        let data = new Date(props.created)
        setCreatedDate(data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear())
        return createdDate
    }

    function deletaCarro() {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };

        fetch(`http://localhost:8000/veiculos/${props.id}`, requestOptions)
            .then(async response => {    
                if (!response.ok) {
                    console.log("Erro")
                    return
                }
                closeDeleteModal()
                handleCallBack() // updates the parent element list
            })
            .catch(error => {
                console.log(error)
            });
    }

    function closeDeleteModal() {
        setDeleteModalShowing(false)
    }

    function openModal(type) {
        if (type == "delete") {
            setModalTitle(`Deletar ${props.veiculo}?`)
            setModalDescription("A ação irá deletar permanentemente o carro.")
            setDeleteModalShowing(true)
            setIsDeleteModal(true)
        } else {
            setModalTitle(`Alterar ${props.veiculo}?`)
            setModalDescription("Altere os dados necessários usando o formulário abaixo")
            setDeleteModalShowing(true)
            setIsDeleteModal(false)
        }
    }

    
  useEffect(() => {
    formatDate();
  }, []);

    return (
        <Container>
            <Modal
                show={isDeleteModalShowing}
                modalClosed={closeDeleteModal}
            >
                <ModalHeader>
                    <ModalTitle>{modalTitle}</ModalTitle>
                    <ModalDescription>{modalDescription}</ModalDescription>
                </ModalHeader>
                {
                    isDeleteModal ?
                    <ModalFooter>
                        <Button click={deletaCarro} solid={true} text="Sim, Deletar" />
                        <Button click={closeDeleteModal} text="Cancelar" />
                    </ModalFooter>
                    : <UpdateCarForm
                        id={props.id}
                        actionType="update"
                        actionButtonText="Alterar"
                        veiculo={props.veiculo}
                        marca={props.marca}
                        ano={props.ano}
                        vendido={props.vendido}
                        descricao={props.descricao}
                        callBackFunction={handleCallBack}
                        cancelButton={closeDeleteModal}
                    />
                }
            </Modal>
            <Header>
                <Title>{props.veiculo} - {props.marca}</Title>
                <YearTag>{props.ano}</YearTag>
                { props.vendido ? <Tag>Vendido</Tag> : "" }
                <p>Olá - {createdDate}</p>
            </Header>
            <Body>
                <Description>
                    {props.descricao.length >= description_limit ?
                    props.descricao.substring(0, description_limit) + "..." :
                    props.descricao}
                </Description>
            </Body>
            <Footer>
                <Button 
                    text="Alterar"
                    click={e => openModal("update")}
                />
                <Button 
                    text="Deletar"
                    click={e => openModal("delete")}
                />
            </Footer>
        </Container>
    )
}

export default CarItem