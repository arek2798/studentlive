import React from 'react';
import styled from 'styled-components';

const ModalBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background: rgba(140,140,140, 0.2);
`

const ModalContent = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 360px;
    height: ${props => props.height ? props.height : "400px"};
    background-color: #ffffff;
    box-shadow: 5px 5px 10px -5px rgba(0,0,0, 0.25);
    padding: 20px;
    border-radius: 10px;
`

const Modal = ({ children, height }) => (
    <ModalBg>
        <ModalContent height={height}>
            {React.Children.map(children, (child) => child)}
        </ModalContent>
    </ModalBg>
);

export default Modal;