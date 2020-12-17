import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DataField from '../../atoms/DataField/DataField';
import Button from '../../atoms/Button/Button';
import { getSchedule } from '../../../actions';

const Field = styled(DataField)`
    text-align: right;
    min-width: 300px;

    @media (max-width: 800px) {
        min-width: 500px;
    }

    @media (max-width: 500px) {
        min-width: calc(100% - 20px);
    }
`
const Heading = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #DEDEDE;
    margin-bottom: 20px;
    text-align: center;
`
const Day = styled.p`
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #DEDEDE;
`

const ListItem = styled.div`
    font-size: 14px;
    font-weight: 500;
    display: flex;
    text-align: center;
`

const Time = styled.p`
    color: #EB5757;
    width: 140px;
    min-height: 30px;
    border-right: 3px solid #25292E;
`

const Title = styled.p`
    width: 100%;
    max-width: 250px;
    padding: 2px 0; 
    color: #DEDEDE;
`

class NextDaySchedule extends React.Component {
    state = {
        activeDays: [],
        daysSchedule: []
    }

    componentDidMount() {
        this.props.getSchedule()
            .then(() => this.setActiveDay());
    }

    setActiveDay = () => {
        const date = new Date();
        const day = date.getDay();
        let activeDays;
        switch (day) {
            case 1:
            case 2:
            case 3:
            case 4:
                activeDays = [day - 1, day];
                break;
            case 5:
                activeDays = [day - 1, 0];
                break;
            case 6:
            case 0:
                activeDays = [0, 1];
                break;
            default: activeDays = [0, 1];
        }
        const schedule = this.props.schedule[0].days;
        const daysSchedule = [schedule[activeDays[0]], schedule[activeDays[1]],]
        this.setState({
            activeDays,
            daysSchedule
        })
    }

    createDayTabel = (index) => {
        const { daysSchedule } = this.state;
        let table = [];
        for (let i = 7; i < 22; i++) {
            const day = daysSchedule[index][i]
            if (day !== '' && day !== undefined) {
                table.push(
                    <ListItem key={i}>
                        <Time>{`${i}:00 - ${i + 1}:00`}</Time>
                        <Title>{day}</Title>
                    </ListItem>
                )
            }
        }
        return table;
    }

    numToDay = (number) => {
        switch (number) {
            case 0: return 'poniedziałek'
            case 1: return 'wtorek'
            case 2: return 'środa'
            case 3: return 'czwartek'
            case 4: return 'piątek'
            default: return 'err'
        }
    }


    render() {
        const { activeDays, daysSchedule } = this.state;
        return (
            <Field>
                <Heading>plan zajęć</Heading>
                {!this.props.isLoading ? daysSchedule.map((day, index) => (
                    <div key={index}>
                        <Day>{this.numToDay(activeDays[index])}:</Day>
                        {this.createDayTabel(index)}
                    </div>
                )) : <p>Trwa ładowanie...</p>}
                <Link to="/schedule"><Button small>Zobacz więcej</Button></Link>
            </Field>
        )
    }
}


NextDaySchedule.propTypes = {
    schedule: PropTypes.array,
    getSchedule: PropTypes.func.isRequired,
};

const mapStateToProps = ({ schedule, isLoading }) => ({ schedule, isLoading })

const mapDispatchToProps = (dispatch) => ({
    getSchedule: () => dispatch(getSchedule())
})

export default connect(mapStateToProps, mapDispatchToProps)(NextDaySchedule);