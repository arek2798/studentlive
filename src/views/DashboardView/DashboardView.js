import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplate';
import NextEventsFiled from '../../components/molecules/NextEventsField/NextEventsField';
import NextTasksField from '../../components/molecules/NextTasksField/NextTasksField';
import NextDaySchedule from '../../components/molecules/NextDaySchedule/NextDaySchedule';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`

class DashboardView extends React.Component {
    state = {

    }

    render() {
        return (
            <UserPageTemplate>
                <Wrapper>
                    <NextDaySchedule />
                    <NextTasksField />
                    <NextEventsFiled />
                </Wrapper >
            </UserPageTemplate >
        );
    }
}

export default DashboardView;