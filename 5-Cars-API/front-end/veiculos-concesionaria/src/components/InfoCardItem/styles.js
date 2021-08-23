import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-top: 3px solid var(--primary);
    background-color: #f9f9f9;
    position: relative;

    @media screen and (min-width: 768px) {
        width: 100%;
        margin: 0 auto;
    }
`;

export const CardHeader = styled.div`
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`;

export const CardTitle = styled.h2`
    margin-bottom: 0;
    font-size: 4rem;
`;

export const CardBody = styled.div`

`;

export const CardNumber = styled.h4`
    font-size: 1rem;
    padding-bottom: 20px;
`;
