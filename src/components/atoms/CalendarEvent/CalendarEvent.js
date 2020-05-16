import React from 'react';
import styled from 'styled-components';

const Event = styled.p`
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 2px;
    margin: 2px 0;
    border-radius: 5px;
    font-size: 12px;
    background: ${({ color }) => color ? color : '#77ADFF'};
    color: #FFFFFF;
`

const CalendarEvent = ({ content, color }) => {

    return (
        <Event color={color}>
            {content}
        </Event>
    )
}

export default CalendarEvent;