import React from 'react';
import styled from 'styled-components';
import { userLogout } from '../../../actions';
import { connect } from 'react-redux';
import { LogOut } from 'react-feather';

const LogoutBtn = styled.button`
    width: 220px;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 40px;
    padding: 10px 10px 10px 43px;
    color: #DEDEDE;
    font-size: 16px;
    font-weight: 400;
    border: none;
    transition: all .2s ease-out;
    background: transparent;

    &:hover {
        color: #F67280;
    }

    svg {
        margin-right: 5px;
    }
`


const Logout = ({ userLogout }) => {
    const handleClick = () => {
        userLogout();
    }

    return (
        <LogoutBtn onClick={handleClick}>
            <LogOut size={20} />
            wyloguj się
        </LogoutBtn>
    )
}

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout())
})

export default connect(null, mapDispatchToProps)(Logout);