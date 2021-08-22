import styled from 'styled-components'

export const Container = styled.div`

`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 2px;
    border: 1px solid #c3c0c0;

    &:focus {
        border: 1px solid var(--primary);
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    border-radius: 2px;
    border: 1px solid #c3c0c0;

    resize: none;

    &:focus {
        border: 1px solid var(--primary);
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px;
    border-radius: 2px;
    border: 1px solid #c3c0c0;

    &:focus {
        border: 1px solid var(--primary);
    }
`;
export const Option = styled.option``;

export const Label = styled.label`
    margin-bottom: 10px;
    font-weight: bold;
`;

export const InputWrapper = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
    justify-content: space-between;
    display: flex;
`;

export const FormFields = styled.div`
    margin-bottom: 30px;
`;

export const MessageWrapper = styled.div`
    padding: 10px;
    color: black;
    border-radius: 2px;
    opacity: .7;

    position: relative;

    display: flex;
    justify-content: space-between;
`;

export const Message = styled.p`
    font-weight: bold;
`;

export const CloseMessage = styled.button`
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        opacity: .6;
        transition: 0.3s ease 0s all;
    }
`;