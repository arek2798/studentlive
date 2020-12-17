import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../../assets/StudentLive.svg';
import Avatar from '../../molecules/Avatar/Avatar';
import Nav from '../../molecules/Nav/Nav';
import Logout from '../../atoms/Logout/Logout';

const Wrapper = styled.section`
    background: #2F3438;
    color: #ffffff;
    width: 250px;
    height: 100vh;
    text-align: center;
    position: fixed;
    flex-shrink: 0;
    z-index: 1000;
    transition: transform 0.5s ease-in-out;
    box-shadow: 5px 0 10px -5px rgba(0,0,0, 0.25);

    @media (max-width: 800px) {
        transform: translateX(${({ open }) => open ? "0px" : "-250px"});
        padding-bottom: 150px;
    }
`
const Logo = styled.img`
    margin: 27px auto 0;
`

const Sidebar = ({ open }) => (
    <Wrapper open={open}>
        <Logo src={LogoImg} alt="Logo StudentLive" />
        <Avatar />
        <Nav />
        <Logout />
    </Wrapper>
);

export default Sidebar;