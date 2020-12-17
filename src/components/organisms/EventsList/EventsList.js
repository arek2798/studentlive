import React from 'react';
import styled from 'styled-components';
import AddNewSidebar from '../../molecules/AddNewSidebar/AddNewSidebar';
import DayEvent from '../../atoms/DayEvent/DayEvent';
import IconButton from '../../atoms/IconButton/IconButton';
import { numToMonthName, numToDayName } from '../../../func';
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
const SidebarDate = styled.header`
    margin: 20px 0;
    padding-bottom: 20px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #FFFFFF;
    border-bottom: 1px solid #CCCCCC;
`
const Info = styled.div`
    text-align: center;
    padding-top: 200px;
    color: #FFFFFF;
`
const IconPosition = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1000;
`

const EventsList = ({ sidebarActive, sidebarToggle, sidebarClose, date, todayEvents, updateEvents }) => {
    const curDate = new Date(date);
    const month = curDate.getMonth() + 1;
    const day = curDate.getDate();
    const dayName = numToDayName(curDate.getDay());
    console.log(day);

    const deleteEvents = (id) => {
        let newEvents = todayEvents.filter(event => event._id !== id);
        updateEvents(newEvents);
    }

    return (
        <AddNewSidebar isSidebarActive={sidebarActive} width="380px">
            <CloseArrow onClick={sidebarClose}>
                <ArrowRight size={25} strokeWidth={3} />
            </CloseArrow>
            <SidebarDate >{dayName}, {day} {numToMonthName(month)}</SidebarDate>
            {todayEvents.length ? todayEvents.map((event) => <DayEvent key={event._id} id={event._id} date={event.date} finish={event.finish} content={event.content} color={event.color} deleteEvents={deleteEvents} />) : <Info>Nic nie zaplanowano na ten dzień!</Info>}
            <IconPosition>
                <IconButton onClick={sidebarToggle}>+</IconButton>
            </IconPosition>
        </AddNewSidebar>
    )
}

export default EventsList;