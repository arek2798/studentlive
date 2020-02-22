import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoutBtn = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 10px 10px 50px;
    width: 220px;
    background: #F67280;
    border-radius: 0 10px 10px 0;
    position: fixed;
    bottom: 30px;
    box-shadow: 10px 10px 10px -7px rgba(0,0,0,0.5);
    transition: all .1s ease-out;

    &:hover {
        background: #FFFFFF;
        color: #F67280;
    }

    svg {
        margin-right: 5px;
    }
`


const Logout = () => (
    <LogoutBtn to="/">
        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M24.375 17.5009H21.25V4.43258C21.25 3.36774 20.409 2.50094 19.375 2.50094H15V5.00094H18.75V20.0009H24.375C24.7203 20.0009 25 19.7213 25 19.3759V18.1259C25 17.7806 24.7203 17.5009 24.375 17.5009ZM12.1969 0.0403916L4.69688 1.98336C4.14023 2.1275 3.75 2.64547 3.75 3.24V17.5009H0.625C0.279687 17.5009 0 17.7806 0 18.1259V19.3759C0 19.7213 0.279687 20.0009 0.625 20.0009H13.75V1.29703C13.75 0.454064 12.9859 -0.164296 12.1969 0.0403916ZM10.3125 11.2509C9.79492 11.2509 9.375 10.6912 9.375 10.0009C9.375 9.3107 9.79492 8.75094 10.3125 8.75094C10.8301 8.75094 11.25 9.3107 11.25 10.0009C11.25 10.6912 10.8301 11.2509 10.3125 11.2509Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="25" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
        wyloguj się
    </LogoutBtn>
)

export default Logout;