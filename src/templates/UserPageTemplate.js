import React from 'react';
// import styled from 'styled-components';
import Sidebar from '../components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => (
    <>
        <Sidebar />
        <main>{children}</main>
    </>
)

export default UserPageTemplate;