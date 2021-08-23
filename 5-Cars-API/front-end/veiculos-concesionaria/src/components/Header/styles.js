import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 20px var(--horizontal__padding);
    background-color: #fafafa;

    height: 80px;
    top: 0;

    position: fixed;
    width: 100%;
    z-index: 1;
`;

export const Title = styled.h1`
    color: var(--primary);
`;

export const ModalTitle = styled.h2`
    color: var(--primary);
`;

export const ModalDescription = styled.h5`
    padding: 5px 0px 20px 0;
`;

export const Col = styled.div`
    @media screen and (min-width: 768px) {
        & > button {
            margin-right: 10px;
        }
    }
`;

export const ModalList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
    padding: 20px;

    align-items: center;

    &:hover {
        background-color: #f7f7f7;
        transition: 0.3s ease 0s all;
    }
`;

export const ListTitle = styled.h3`

`;

export const ListNumber = styled.h4`
    font-size: 2.5rem;
`;

export const ModalFooter = styled.div`
    display: flex;
    margin-top: 20px;
`;