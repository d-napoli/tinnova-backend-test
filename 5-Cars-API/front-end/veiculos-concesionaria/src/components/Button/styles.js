import styled from 'styled-components'

export const Container = styled.div``;

export const Btn = styled.button`
    background-color: ${props => (props.solid ? "var(--primary)" : "transparent")};
    border: ${props => (props.solid ? "2px solid var(--primary)" : "2px solid var(--primary)")};
    border-radius: 10px;
    color: ${props => (props.solid ? "white" : "var(--primary)")};
    padding: 10px 20px;
    font-size: 1rem;

    &:hover {
        background-color:  ${props => (props.solid ? "var(--primary_hover)" : "var(--primary)")};
        border: ${props => (props.solid ? "2px solid var(--primary_hover)" : "2px solid var(--primary)")};
        color: white;
        cursor: pointer;
        transition: 0.3s ease 0s all;
    }
`;