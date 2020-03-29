import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DataField from '../../atoms/DataField/DataField';
import Button from '../../atoms/Button/Button';

const Field = styled(DataField)`
    text-align: right;
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

const Date = styled.p`
    color: #EB5757;
    width: 200px;
    min-height: 30px;
    border-right: 3px solid #EEEEEE;
`

const Title = styled.p`
    width: 100%;
`

const NextEventsField = ({ events }) => {
    const changeToMonth = (number) => {
        switch (number) {
            case 0:
                return "Styczeń"
            case 1:
                return "Luty"
            case 2:
                return "Marzec"
            case 3:
                return "Kwiecień"
            case 4:
                return "Maj"
            case 5:
                return "Czerwiec"
            case 6:
                return "Lipiec"
            case 7:
                return "Sierpień"
            case 8:
                return "Wrzesień"
            case 9:
                return "Październik"
            case 10:
                return "Listopad"
            case 11:
                return "Grudzień"
            default:
                break;
        }
    }

    const upcommingEvents = events.slice(0, 4);

    return (
        <Field>
            <Heading>najblizsze wydarzenia</Heading>
            {upcommingEvents.map(event => (
                <ListItem key={event.id}>
                    <Date>{event.start.getDate()} {changeToMonth(event.start.getMonth())} {event.start.getFullYear()}</Date>
                    <Title>{event.title}</Title>
                </ListItem>
            ))}
            <Link to="/calendar"><Button small>Zobacz więcej</Button></Link>
        </Field>
    );
}


const mapStateToProps = ({ events }) => ({ events })

export default connect(mapStateToProps)(NextEventsField);