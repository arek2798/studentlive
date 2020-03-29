import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTasks } from '../../actions';
import NextEventsFiled from '../../components/molecules/NextEventsField/NextEventsField';
import NextTasksField from '../../components/molecules/NextTasksField/NextTasksField';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`

class DashboardView extends React.Component {
    state = {

    }

    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        return (
            <Wrapper>
                <NextEventsFiled />
                <NextTasksField />
            </Wrapper >
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getTasks: () => dispatch(getTasks())
})

export default connect(null, mapDispatchToProps)(DashboardView);