import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplate';
import NextEventsFiled from '../../components/molecules/NextEventsField/NextEventsField';
import NextTasksField from '../../components/molecules/NextTasksField/NextTasksField';
import NextDaySchedule from '../../components/molecules/NextDaySchedule/NextDaySchedule';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    justify-items: left;
    flex-wrap: wrap;

    & > div {
        margin: 0 10px 10px;
    }
`

const DashboardView = () => {

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

export default DashboardView;