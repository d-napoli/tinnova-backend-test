import React, { useEffect, useState } from 'react';

import Button from '../Button'
import Modal from '../Modal_Group/Modal'

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
    const [isModalShowing, setModalShowing] = useState(false)

    let description_limit = 150

    const deleteItem = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/veiculos/${props.id}`,
                {method: 'DELETE'},
                {mode:'no-cors'},
                {headers: {'Content-Type': 'application/json'}}
            );
            const data = await response.json();
            console.log({ data })
        }
        catch (e) {
            console.log(e)
        }
    }


    function deleteItem2() {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };

        let error_message = "Erro ao cadastrar o veículo"

        fetch(`http://localhost:8000/veiculos/${props.id}`, requestOptions)
            .then(async response => {    
                if (!response.ok) {
                    return
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    function closeModal() {
        setModalShowing(false)
    }

    function openModal() {
        let modal_status = isModalShowing
        setModalShowing(!modal_status)
    }

    return (
        <Container>
            <Modal
                show={isModalShowing}
                modalClosed={closeModal}
            >
                <ModalHeader>
                    <ModalTitle>Deletar {props.veiculo}?</ModalTitle>
                    <ModalDescription>A ação irá deletar permanentemente o carro.</ModalDescription>
                </ModalHeader>
                <ModalFooter>
                    <Button click={deleteItem} solid={true} text="Sim, deletar" />
                    <Button click={closeModal} text="Cancelar" />
                </ModalFooter>
            </Modal>
            <Header>
                <Title>{props.veiculo} - {props.id} - {props.marca}</Title>
                <YearTag>{props.ano}</YearTag>
                { props.vendido ? <Tag>Vendido</Tag> : "" }
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
                    text="Deletar"
                    click={openModal}
                />
            </Footer>
        </Container>
    )
}

export default CarItem