import styled, { css } from 'styled-components';

const Button = styled.button`
    background-color: #EB5757;
    border: none;
    border-radius: ${props => props.large ? "15px" : "12.5px"};
    width: 100px;
    height: ${props => props.large ? "30px" : "25px"};
    color: #ffffff;
    font-size: ${props => props.large ? "14px" : "10px"};
    cursor: pointer;
    transition: ease-out .1s;

    &:hover {
        background-color: #FC5757;
    }

    ${({ close }) =>
        close && css`
            width: 25px;
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 14px;
        `
    }
`

export default Button;