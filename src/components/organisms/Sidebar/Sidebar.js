import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../../assets/StudentLive.svg';
import Avatar from '../../molecules/Avatar/Avatar';
import Nav from '../../molecules/Nav/Nav';
import Logout from '../../atoms/Logout/Logout';

const Wrapper = styled.section`
    background: #212328;
    color: #ffffff;
    width: 250px;
    height: 100vh;
    text-align: center;
    position: fixed;
    flex-shrink: 0;
    z-index: 1000;
    transition: transform 0.5s ease-in-out;

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