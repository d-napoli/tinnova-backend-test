import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    background-color: white;
    width: 100%;
`;

export const FiltersWrapper = styled.div`
    display: flex;

    align-items: flex-start;
    width: 100%;

    @media screen and (min-width: 768px) {
        & button {
            margin-right: 10px;
        }
    }
`;