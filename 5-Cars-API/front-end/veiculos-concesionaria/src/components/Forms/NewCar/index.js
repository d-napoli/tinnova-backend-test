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

import { CAR_BRANDS } from '../../../constants/car_brands';

function NewCar(props) {
    const [nome, setNome] = useState(props.veiculo ? props.veiculo : "")
    const [marca, setMarca] = useState(props.marca ? props.marca : "")
    const [ano, setAno] = useState(props.ano ? props.ano : new Date().getFullYear())
    const [descricao, setDescricao] = useState(props.descricao ? props.descricao : "")
    const [vendido, setVendido] = useState(props.vendido ? props.vendido : false)

    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("")
    const [isError, setIsError] = useState(false)

    const [carBrands, setCarBrandsa] = useState(CAR_BRANDS)

    function limpaCampos() {
        setNome("")
        setMarca("")
        setAno(new Date().getFullYear())
        setDescricao("")
    }

    function handleCallBack() {
        props.callBackFunction()
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

    function alteraCarro() {
        if(nome != props.veiculo || marca != props.marca || ano != props.ano || descricao != props.descricao || vendido != props.vendido) {
            let update_method = 'PATCH'

            if(nome != props.veiculo && marca != props.marca && ano != props.ano && descricao != props.descricao && vendido != props.vendido)
                update_method = 'PUT'

            const requestOptions = {
                method: update_method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'veiculo': nome,
                    'marca': marca,
                    'ano': ano,
                    'descricao': descricao,
                    'vendido': vendido
                })
            };
    
            let error_message = "Erro ao alterar o veículo"
    
            fetch(`http://localhost:8000/veiculos/${props.id}/`, requestOptions)
                .then(async response => {    
                    if (!response.ok) {
                        addMensagem(error_message)
                        return
                    }
    
                    addMensagem(`Veículo ${nome} atualizado com sucesso!`)
                    limpaCampos()
                    handleCallBack()
                })
                .catch(error => {
                    addMensagem(error_message)
                    console.error('There was an error!', error);
                    console.log(`É um erro: ${isError}`)
                });
        } else {
            alert("No data has been updated")
        }
    }

    function cadastraCarro() {
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
                handleCallBack()
            })
            .catch(error => {
                addMensagem(error_message)
                console.error('There was an error!', error);
                console.log(`É um erro: ${isError}`)
            });
    }

    const brandsLoop = (cb) => {
        return cb();
    };

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
                    <Label>Marca</Label>
                    <Select onChange={e => setMarca(e.target.value)}>
                        {brandsLoop(() => {
                            const row = [];
                            for (let k in carBrands) 
                                row.push(<Option selected={marca == carBrands[k] ? true : false} value={carBrands[k]}>{carBrands[k]}</Option>);
                            return row;
                        })}
                    </Select>
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
                    <Select value={vendido} onChange={e => setVendido(e.target.value)}>
                        <Option value={false}>Não</Option>
                        <Option value={true}>Sim</Option>
                    </Select>
                </InputWrapper>
            </FormFields>
            <ButtonsWrapper>
                <Button
                    text={props.actionButtonText}
                    solid={true}
                    click={props.actionType == "new" ? cadastraCarro : alteraCarro}
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