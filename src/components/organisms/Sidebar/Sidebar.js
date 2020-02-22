import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../../assets/StudentLive.svg';
import Avatar from '../../molecules/Avatar/Avatar';
import Nav from '../../molecules/Nav/Nav';
import Logout from '../../atoms/Logout/Logout';

const Wrapper = styled.section`
    background: #212328;
    color: #ffffff;
    width: 310px;
    height: 100vh;
    text-align: center;
    position: relative;
    flex-shrink: 0;
`
const Logo = styled.img`
    margin: 27px auto 0;
`

const Sidebar = () => (
    <Wrapper>
        <Logo src={LogoImg} alt="Logo StudentLive" />
        <Avatar />
        <Nav />
        <Logout />
    </Wrapper>
);

export default Sidebar;