import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 20px var(--horizontal__padding);
    /* box-shadow: 0px 1px 6px rgb(0 0 0 / 8%); */
    background-color: #fafafa;
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