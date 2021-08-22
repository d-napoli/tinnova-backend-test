import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
    text-align: left;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;

    border: 1px solid #dcdcdc; 
    border-radius: 5px;

    margin: 10px 0;

    &:hover {
        background-color: #f9f9f9;
        transition: 0.3s ease 0s all;
    }
`;

export const Header = styled.div`
    position: relative;
    width: 100%;

    margin-bottom: 10px;
`

export const Title = styled.h2``

export const YearTag = styled.small`
    font-weight: bold;
`

export const Tag = styled.span`
    position: absolute;
    background-color: var(--primary);
    padding: 5px;
    border-radius: 5px;
    color: white;
    font-weight: bold;

    font-size: .7rem;

    top: 2px;
    right: 0;
`

export const Body = styled.div``

export const Description = styled.p``

export const Footer = styled.div`
    margin-top: 20px;
`

export const ModalTitle = styled.h2`
    color: var(--primary);
    font-size: 2rem;
`;

export const ModalDescription = styled.h5`
    padding: 5px 0px 20px 0;
    font-size: 1rem;
`;

export const ModalFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        width: 60%;
        margin: 0 auto;
    }

`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;