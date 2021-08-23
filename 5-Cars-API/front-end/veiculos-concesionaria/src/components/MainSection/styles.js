import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
    padding: var(--vertical__padding) var(--horizontal__padding);

    margin-top: 80px;
`;

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

export const Col_Half = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
`;