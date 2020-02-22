import styled, { css } from 'styled-components';

const Input = styled.input`
    height: ${props => props.textarea ? "360px" : "40px"};
    width: ${({ width }) => width ? width : "100%"};
    background: #F5F5F5;
    color: #4B6584;
    border: 2px solid #F1F1F1;
    border-radius: 15px;
    padding: 15px;
    outline: none;
    font-size: 16px;
    resize: none;

    ${({ small }) => (
        small && css`
            height: 20px;
            font-size: 14px;
            border-radius: 10px;
            padding: 12px;
            font-weight: 400;
        `
    )}

    &:focus {
    border-color: #EB5757;
    }

    &[type=date]::-webkit-inner-spin-button,
    &[type=time]::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
}
`

export default Input;