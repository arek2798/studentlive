import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 5px 0;
`
const Event = styled.div`
    display: flex;
    align-items: center;
    border-left: 4px solid ${({ color }) => color ? color : "#4B6584"};
    padding: 10px 5px;
`
const Time = styled.div`
    width: 55px;
    margin-right: 10px;
    text-align: center;
    font-weight: 500;

    p {
        font-size: 12px;
    }
`
const Desc = styled.div`
    font-weight: 500;
`

const DayEvent = ({ date, finish, content, color }) => {
    const getTime = (eventDate) => {
        const date = new Date(eventDate);
        return `${date.getHours()}:${date.getMinutes() === 0 ? date.getMinutes() + "0" : date.getMinutes()}`
    }

    return (
        <Wrapper>
            <Event color={color}>
                <Time>
                    {getTime(date)}
                    <p>do {getTime(finish)}</p>
                </Time>
                <Desc>{content}</Desc>
            </Event>
        </Wrapper>
    )
}

export default DayEvent;