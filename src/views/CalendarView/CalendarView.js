import React from 'react';
// import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplate';
import Schedule from '../../components/organisms/Schedule/Schedule';

class CalendarView extends React.Component {
    state = {

    }

    render() {
        return (
            <UserPageTemplate>
                <Schedule />
            </UserPageTemplate>
        )
    }
}

export default CalendarView;