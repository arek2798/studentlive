import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeEvent } from '../../../actions';

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
const TrashIcon = styled.button`
    background: transparent;
    border: none;
    color: inherit;

    &:hover svg path {
        fill: #EB5757;
    }
`

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
                <TrashIcon onClick={handleDelete}>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.964286 16.3124C0.964286 16.7599 1.11668 17.1892 1.38793 17.5056C1.65919 17.8221 2.0271 17.9999 2.41071 17.9999H11.0893C11.4729 17.9999 11.8408 17.8221 12.1121 17.5056C12.3833 17.1892 12.5357 16.7599 12.5357 16.3124V4.49988H0.964286V16.3124ZM9.16071 7.31238C9.16071 7.1632 9.21151 7.02013 9.30193 6.91464C9.39235 6.80915 9.51499 6.74988 9.64286 6.74988C9.77073 6.74988 9.89336 6.80915 9.98378 6.91464C10.0742 7.02013 10.125 7.1632 10.125 7.31238V15.1874C10.125 15.3366 10.0742 15.4796 9.98378 15.5851C9.89336 15.6906 9.77073 15.7499 9.64286 15.7499C9.51499 15.7499 9.39235 15.6906 9.30193 15.5851C9.21151 15.4796 9.16071 15.3366 9.16071 15.1874V7.31238ZM6.26786 7.31238C6.26786 7.1632 6.31865 7.02013 6.40907 6.91464C6.49949 6.80915 6.62213 6.74988 6.75 6.74988C6.87787 6.74988 7.00051 6.80915 7.09093 6.91464C7.18135 7.02013 7.23214 7.1632 7.23214 7.31238V15.1874C7.23214 15.3366 7.18135 15.4796 7.09093 15.5851C7.00051 15.6906 6.87787 15.7499 6.75 15.7499C6.62213 15.7499 6.49949 15.6906 6.40907 15.5851C6.31865 15.4796 6.26786 15.3366 6.26786 15.1874V7.31238ZM3.375 7.31238C3.375 7.1632 3.4258 7.02013 3.51622 6.91464C3.60664 6.80915 3.72927 6.74988 3.85714 6.74988C3.98502 6.74988 4.10765 6.80915 4.19807 6.91464C4.28849 7.02013 4.33929 7.1632 4.33929 7.31238V15.1874C4.33929 15.3366 4.28849 15.4796 4.19807 15.5851C4.10765 15.6906 3.98502 15.7499 3.85714 15.7499C3.72927 15.7499 3.60664 15.6906 3.51622 15.5851C3.4258 15.4796 3.375 15.3366 3.375 15.1874V7.31238ZM13.0179 1.12488H9.40179L9.11853 0.467462C9.05852 0.326913 8.96609 0.208685 8.85164 0.12608C8.73718 0.0434758 8.60523 -0.000228522 8.47065 -0.000115906H5.02634C4.89206 -0.000718152 4.76034 0.0428232 4.64629 0.12552C4.53224 0.208216 4.44046 0.326723 4.38147 0.467462L4.09821 1.12488H0.482143C0.354271 1.12488 0.231636 1.18415 0.141216 1.28964C0.0507971 1.39513 0 1.5382 0 1.68738L0 2.81238C0 2.96157 0.0507971 3.10464 0.141216 3.21013C0.231636 3.31562 0.354271 3.37488 0.482143 3.37488H13.0179C13.1457 3.37488 13.2684 3.31562 13.3588 3.21013C13.4492 3.10464 13.5 2.96157 13.5 2.81238V1.68738C13.5 1.5382 13.4492 1.39513 13.3588 1.28964C13.2684 1.18415 13.1457 1.12488 13.0179 1.12488V1.12488Z" fill="#CCCCCC" />
                    </svg>
                </TrashIcon>
            </Event>
        </Wrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    removeEvent: (id) => dispatch(removeEvent(id))
})

export default connect(null, mapDispatchToProps)(DayEvent);