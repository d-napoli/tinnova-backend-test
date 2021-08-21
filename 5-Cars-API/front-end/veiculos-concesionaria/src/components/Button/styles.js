import styled from 'styled-components'

export const Container = styled.div``;

export const Btn = styled.button`
    background-color: var(--primary);
    border-radius: 10px;
    margin: 500px;
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 1rem;

    height: 49px;

    &:hover {
        background-color: var(--primary_hover);
        cursor: pointer;
        transition: 0.3s ease 0s all;
    }
`;