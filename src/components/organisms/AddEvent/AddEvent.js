import React from 'react';
import styled from 'styled-components';
import AddNewSidebar from '../../molecules/AddNewSidebar/AddNewSidebar';
import AddEventForm from '../AddEventForm/AddEventForm';
import { ArrowRight } from 'react-feather';

const CloseArrow = styled.button`
    background: transparent;
    border: none;
    transition: all 0.1s ease-in-out;
    color: #DEDEDE;

    &:hover{
        color: #EB5757;
    }

    @media (max-width: 420px) {
        padding-left: 30px;
    }
`

const AddEvent = ({ sidebarActive, sidebarToggle, date }) => (
    <AddNewSidebar isSidebarActive={sidebarActive} width="380px">
        <CloseArrow onClick={sidebarToggle}>
            <ArrowRight size={25} strokeWidth={3} />
        </CloseArrow>
        <AddEventForm date={date} sidebarToggle={sidebarToggle} />
    </AddNewSidebar>
)

export default AddEvent;