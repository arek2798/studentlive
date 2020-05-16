import React from 'react';
import styled from 'styled-components';
import AddNewSidebar from '../../molecules/AddNewSidebar/AddNewSidebar';
import AddEventForm from '../AddEventForm/AddEventForm';

const CloseArrow = styled.button`
    background: transparent;
    border: none;

    & path {
        transition: all 0.1s ease-in-out;
    }
    &:hover path{
        fill: #EB5757;
    }
`

const AddEvent = ({ sidebarActive, sidebarToggle, date }) => (
    <AddNewSidebar isSidebarActive={sidebarActive} width="380px">
        <CloseArrow onClick={sidebarToggle}>
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.35491 2.2666L10.4451 1.18262C10.9067 0.723633 11.6531 0.723633 12.1098 1.18262L21.6562 10.6699C22.1179 11.1289 22.1179 11.8711 21.6562 12.3252L12.1098 21.8174C11.6482 22.2764 10.9018 22.2764 10.4451 21.8174L9.35491 20.7334C8.88839 20.2695 8.89821 19.5127 9.37455 19.0586L15.292 13.4531H1.17857C0.525446 13.4531 0 12.9307 0 12.2812V10.7187C0 10.0693 0.525446 9.54687 1.17857 9.54687H15.292L9.37455 3.94141C8.8933 3.4873 8.88348 2.73047 9.35491 2.2666Z" fill="#CCCCCC" />
            </svg>
        </CloseArrow>
        <AddEventForm date={date} sidebarToggle={sidebarToggle} />
    </AddNewSidebar>
)

export default AddEvent;