import React, { useState, useEffect } from 'react'

import {
    Container,
    Input,
    TextArea,
    Select,
    Option,
    Label,
    InputWrapper,
    ButtonsWrapper,
    FormFields,
    MessageWrapper,
    Message,
    CloseMessage
} from './styles'

import Button from '../../Button'

function NewCar(props) {
    const [nome, setNome] = useState("")
    const [marca, setMarca] = useState("")
    const [ano, setAno] = useState(new Date().getFullYear())
    const [descricao, setDescricao] = useState("")
    const [vendido, setVendido] = useState(false)

    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("")
    const [isError, setIsError] = useState(false)

    function limpaCampos() {
        setNome("")
        setMarca("")
        setAno(new Date().getFullYear())
        setDescricao("")
    }

    function handleCloseMessage() {
        setShowMessage(false)
        setMessage("")
        setIsError(false)
    }

    function addMensagem(mensagem) {
        setMessage(mensagem)
        setShowMessage(true)
    }

    function handleRequest() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "veiculo": nome,
                "marca": marca,
                "ano": ano,
                "descricao": descricao,
                "vendido": vendido
            })
        };

        let error_message = "Erro ao cadastrar o veículo"

        fetch('http://localhost:8000/veiculos/', requestOptions)
            .then(async response => {    
                if (!response.ok) {
                    addMensagem(error_message)
                    return
                }

                addMensagem(`Veículo ${nome} cadastrado com sucesso!`)
                limpaCampos()
            })
            .catch(error => {
                addMensagem(error_message)
                console.error('There was an error!', error);
                console.log(`É um erro: ${isError}`)
            });
    }

    return (
        <Container>
            {
                showMessage ?
                <MessageWrapper>
                    <Message>{message}</Message>
                    <CloseMessage onClick={e => handleCloseMessage()}>X</CloseMessage>
                </MessageWrapper>
                :
                null
            }
            <FormFields>
                <InputWrapper>
                    <Input
                        name="nome"
                        placeholder="Nome"
                        type="text"
                        maxLength="200"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        name="marca"
                        placeholder="Marca"
                        type="text"
                        maxLength="200"
                        value={marca}
                        onChange={e => setMarca(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        name="ano"
                        placeholder="Ano"
                        type="number"
                        maxLength="4"
                        value={ano}
                        onChange={e => setAno(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <TextArea
                        name="descricao"
                        placeholder="Descrição"
                        type="text"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>Veículo Vendido?</Label>
                    <Select onChange={e => setVendido(e.target.value)}>
                        <Option value={false}>Não</Option>
                        <Option value={true}>Sim</Option>
                    </Select>
                </InputWrapper>
            </FormFields>
            <ButtonsWrapper>
                <Button
                    text={props.actionButtonText}
                    solid={true}
                    click={handleRequest}
                ></Button>
                <Button
                    solid={false}
                    text="Cancelar"
                    click={props.cancelButton}
                />
            </ButtonsWrapper>
        </Container>
    )
}

export default NewCar