import styled from 'styled-components';

const IconButton = styled.button`
    width: 50px;
    height: 50px;
    border: 2px solid #EB5757;
    border-radius: 25px;
    background: #EB5757;
    color: #FFFFFF;
    font-size: 48px;
    font-weight: 500;
    line-height: 50px;
    cursor: pointer;
    outline: none;
    transition: all .1s ease-in-out;

    &:hover {
       background: #FFFFFF;
       color: #EB5757
    }
`

export default IconButton;