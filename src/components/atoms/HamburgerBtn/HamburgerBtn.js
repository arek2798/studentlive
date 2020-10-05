import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    position: fixed;
    top: 25px;
    left: 25px;
    background: #EB5757;
    padding: 9px 6px 6px;
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
        {!open ? <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.2 20H2.8C1.2544 20 0 19.104 0 18C0 16.896 1.2544 16 2.8 16H25.2C26.7456 16 28 16.896 28 18C28 19.104 26.7456 20 25.2 20Z" fill="#FAFAFA" />
            <path d="M25.2 12H2.8C1.2544 12 0 11.104 0 10C0 8.896 1.2544 8 2.8 8H25.2C26.7456 8 28 8.896 28 10C28 11.104 26.7456 12 25.2 12Z" fill="#FAFAFA" />
            <path d="M25.2 4H2.8C1.2544 4 0 3.104 0 2C0 0.896 1.2544 0 2.8 0H25.2C26.7456 0 28 0.896 28 2C28 3.104 26.7456 4 25.2 4Z" fill="#FAFAFA" />
        </svg>
            :
            <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5339 9.94719L1.87967 4.15511C0.346767 3.12918 -0.398968 1.55191 0.215079 0.634438C0.829125 -0.283038 2.57157 -0.195012 4.10447 0.830924L14.1297 7.54059L24.1549 0.830955C25.6878 -0.194981 27.4302 -0.283007 28.0443 0.634468C28.6583 1.55194 27.9126 3.12921 26.3797 4.15514L17.7255 9.94719L26.3204 15.6996C27.8533 16.7255 28.599 18.3028 27.985 19.2202C27.3709 20.1377 25.6285 20.0497 24.0956 19.0237L14.1297 12.3538L4.16376 19.0238C2.63086 20.0497 0.888415 20.1377 0.274368 19.2203C-0.339679 18.3028 0.406057 16.7255 1.93896 15.6996L10.5339 9.94719Z" fill="#FAFAFA" />
            </svg>}
    </Button>
)

export default HamburgerBtn;