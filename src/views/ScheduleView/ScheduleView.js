import React from 'react';
// import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplate';
import Schedule from '../../components/organisms/Schedule/Schedule';

class ScheduleView extends React.Component {
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

export default ScheduleView;