import React from 'react';
import styled from 'styled-components';
import NextEventsFiled from '../../components/molecules/NextEventsField/NextEventsField';
import NextTasksField from '../../components/molecules/NextTasksField/NextTasksField';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`

const DashboardView = () => {

    return (
        <Wrapper>
            <NextEventsFiled />
            <NextTasksField />
        </Wrapper >
    );
}

export default DashboardView;