import React, { useState } from 'react';
// import styled from 'styled-components';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import HamburgerBtn from '../components/atoms/HamburgerBtn/HamburgerBtn';

const UserPageTemplate = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Sidebar open={open} />
            <HamburgerBtn action={() => setOpen(!open)} open={open} />
            <main>{children}</main>
        </>
    )
}
export default UserPageTemplate;