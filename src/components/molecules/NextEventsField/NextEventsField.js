import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../../../actions';
import { numToMonthName, sortEvents } from '../../../func';
import DataField from '../../atoms/DataField/DataField';
import Button from '../../atoms/Button/Button';

const Field = styled(DataField)`
    text-align: right;

    & > p {
        text-align: center;
        margin-bottom: 10px;
    }
`

const Heading = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #828282;
    margin-bottom: 20px;
    text-align: center;
`

const ListItem = styled.div`
    font-size: 14px;
    font-weight: 500;
    display: flex;
    text-align: center;
`

const DateP = styled.p`
    color: #EB5757;
    width: 200px;
    min-height: 30px;
    border-right: 3px solid #EEEEEE;
`

const Title = styled.p`
    width: 100%;
`

class NextEventsField extends React.Component {
    state = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
    }

    componentDidMount() {
        const month = this.state.month > 9 ? this.state.month : `0${this.state.month}`;
        const param = `${this.state.year}-${month}`;
        this.props.fetchEvents(param);
    }

    render() {
        let sortedEvents = sortEvents(this.props.events);

        return (
            <Field>
                <Heading>najbliższe wydarzenia</Heading>
                {sortedEvents.length ? sortedEvents.map(event => (
                    <ListItem key={event._id}>
                        <DateP>{new Date(event.date).getDate()} {numToMonthName(new Date(event.date).getMonth())}</DateP>
                        <Title>{event.content}</Title>
                    </ListItem>
                )) : <p>Brak wydarzeń</p>}
                <Link to="/calendar"><Button small>Zobacz więcej</Button></Link>
            </Field>
        );
    }
}


const mapStateToProps = ({ events }) => ({ events });
const mapDispatchToProps = dispatch => ({
    fetchEvents: (month) => dispatch(fetchEvents(month))
})

export default connect(mapStateToProps, mapDispatchToProps)(NextEventsField);