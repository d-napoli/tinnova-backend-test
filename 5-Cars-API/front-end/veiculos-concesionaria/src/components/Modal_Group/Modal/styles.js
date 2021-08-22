import styled from 'styled-components'

export const Modal = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    padding: 30px;
    left: 15%;
    top: 20%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    border-radius: 10px;

    @media screen and (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
    }
`