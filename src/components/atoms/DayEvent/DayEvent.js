import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeEvent } from '../../../actions';
import { Trash } from 'react-feather';

const Wrapper = styled.div`
    padding: 5px 0;
`
const Event = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 55px auto 15px;
    grid-column-gap: 10px;
    border-left: 4px solid ${({ color }) => color ? color : "#4B6584"};
    padding: 10px 5px;
    color: #FFFFFF;

    svg:hover {
        color: #EB5757;
        cursor: pointer;
    }
`
const Time = styled.div`
    width: 55px;
    text-align: center;
    font-weight: 500;

    p {
        font-size: 12px;
    }
`
const Desc = styled.div`
    font-weight: 500;
`
// const TrashIcon = styled.button`
//     background: transparent;
//     border: none;
//     color: inherit;

//     &:hover svg path {
//         fill: #EB5757;
//     }
// `

const DayEvent = ({ removeEvent, id, date, finish, content, color, deleteEvents }) => {
    const getTime = (eventDate) => {
        const date = new Date(eventDate);
        return `${date.getHours()}:${date.getMinutes() === 0 ? date.getMinutes() + "0" : date.getMinutes()}`
    }

    const handleDelete = () => {
        removeEvent(id);
        deleteEvents(id);
    }

    return (
        <Wrapper>
            <Event color={color}>
                <Time>
                    {getTime(date)}
                    <p>do {getTime(finish)}</p>
                </Time>
                <Desc>{content}</Desc>
                <Trash size={18} onClick={handleDelete} />
            </Event>
        </Wrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    removeEvent: (id) => dispatch(removeEvent(id))
})

export default connect(null, mapDispatchToProps)(DayEvent);