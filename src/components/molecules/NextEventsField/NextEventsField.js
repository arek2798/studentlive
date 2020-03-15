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
                break;
            case 1:
                return "Luty"
                break;
            case 2:
                return "Marzec"
                break;
            case 3:
                return "Kwiecień"
                break;
            case 4:
                return "Maj"
                break;
            case 5:
                return "Czerwiec"
                break;
            case 6:
                return "Lipiec"
                break;
            case 7:
                return "Sierpień"
                break;
            case 8:
                return "Wrzesień"
                break;
            case 9:
                return "Październik"
                break;
            case 10:
                return "Listopad"
                break;
            case 11:
                return "Grudzień"
                break;
            default:
                break;
        }
    }

    const upcommingEvents = events.slice(0, 4);

    return (
        <Field>
            <Heading>najblizsze wydarzenia</Heading>
            {upcommingEvents.map(event => (
                < ListItem >
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