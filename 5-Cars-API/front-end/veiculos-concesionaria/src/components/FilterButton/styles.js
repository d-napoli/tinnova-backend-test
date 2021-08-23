import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding-top: 40px;
`;

export const Button = styled.button`
    background-color: ${props => props.active ? "var(--primary)" : "transparent"};
    border: 2px solid var(--primary);
    color: ${props => props.active ? "white" : "var(--primary)"};
    font-weight: bold;
    border-radius: 25px;
    padding: 10px 20px;

    &:hover {
        transition: 0.3s ease 0s all;
        background-color: var(--primary);
        cursor: pointer;
        color: white;
    }
`;