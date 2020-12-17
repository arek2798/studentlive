import React from 'react';
import styled from 'styled-components';
import { X, Menu } from 'react-feather';

const Button = styled.button`
    border: none;
    position: fixed;
    top: 25px;
    left: 25px;
    background: #EB5757;
    padding: 6px 6px 3px;
    border-radius: 5px;
    transition: transform 0.5s ease-in-out;
    transform: translateX(${({ open }) => open && "250px"});
    z-index: 1000;

    &:focus {
        outline: none;
    }
    
    @media (min-width: 800px) {
        display: none;
    }
`

const HamburgerBtn = ({ action, open }) => (
    <Button onClick={action} open={open}>
        {!open ?
            <Menu size={24} color="white" />
            :
            <X size={24} color="white" />}
    </Button>
)

export default HamburgerBtn;