import styled, { css } from 'styled-components';

const Input = styled.input`
    height: ${props => props.textarea ? "360px" : "40px"};
    width: ${({ width }) => width ? width : "100%"};
    background: #25292E;
    color: #DEDEDE;
    border: 2px solid #25292E;
    /* border: none; */
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

    &[type=time]::-webkit-inner-spin-button,
    &[type=date]::-webkit-inner-spin-button {
        display: none;
        -webkit-appearance: none;
    }

    &[type=time]::-webkit-calendar-picker-indicator,
    &[type=date]::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
`

export default Input;