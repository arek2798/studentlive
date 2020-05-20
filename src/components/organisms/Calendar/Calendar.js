import React from 'react';
import styled from 'styled-components';
import { fetchEvents } from '../../../actions';
import { connect } from 'react-redux';
import DataField from '../../atoms/DataField/DataField';
import CalendarEvent from '../../atoms/CalendarEvent/CalendarEvent';
import { numToMonthName, sortEvents } from '../../../func';

const Wrapper = styled(DataField)`
    /* position: relative;
    right: ${({ sidebarOpen }) => sidebarOpen ? "300px" : "inherit"}; */
`
const Month = styled.div`
    margin: 10px auto;
    width: 315px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Arrow = styled.button`
    background: transparent;
    border: none;
    outline: none;
    
    & > svg > path {
        transition: all .1s ease-in-out;
    }
    &:hover > svg > path {
        fill: #EB5757;
    }
`
const MonthName = styled.div`
    width: 100%;
    padding: 0 10px;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    color: #EB5757;
`
const Table = styled.table`
    width: 910px;
    margin: 20px auto;
    /* position: relative; */
    /* transform: translateX(${({ sidebarOpen }) => sidebarOpen ? "-150px" : "0"}); */
    transition: all 0.4s ease-in-out;
    border-collapse: collapse;

    th {
        padding-bottom: 13px;
    }
    td {
        width: 130px;
        height: 110px;
        padding: 5px;
        border: solid 2px black;
        vertical-align: top;

        &.clickable {
            cursor: pointer;
            transition: all .1s ease;

            &:hover {
                background: #F6F6F6;
            }
        }
        &:not(.clickable) {
            background: #E3E3E3;
        }
        &.today {
            span {
                color: #EB5757;
                font-weight: 500;
            }
        }
    }
`
const DayWrapper = styled.div`
    width: 100%;
    height: 100%;
`

class Calendar extends React.Component {
    state = {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents = () => {
        const month = this.state.month > 9 ? this.state.month : `0${this.state.month}`;
        const param = `${this.state.year}-${month}`;
        this.props.fetchEvents(param);
    }

    createTable = () => {
        const { month, year } = this.state;
        const date = new Date(year, month - 1, 1);
        let table = [];
        let monthDays = this.getDaysInMonth(month, year);
        let dayOfWeek = date.getDay() === 0 ? 7 : date.getDay();

        let day = 1;
        for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 7; j++) {
                const currentDay = day - dayOfWeek + 1;
                const clickable = day >= dayOfWeek && day < monthDays + dayOfWeek
                const todayEvents = this.filterAndSortEvents(this.props.events, currentDay);
                let classes = [];
                if (clickable) classes.push("clickable");
                if (currentDay === this.state.day) classes.push("today");
                row.push(
                    <td key={j} className={classes.join(" ")}>{clickable && <DayWrapper onClick={() => this.props.changeSelectDay(`${year}-${month}-${currentDay}`, todayEvents)}>{clickable && <span>{currentDay}.</span>}{todayEvents.map((event, index) => <CalendarEvent key={index} content={event.content} color={event.color} />)}</DayWrapper>}</td>
                )
                day++;
            }
            table.push(<tr key={day / 7}>{row}</tr>);
            if (i === 4 && (day - dayOfWeek) < monthDays) i--;
        }

        return table;
    }

    filterAndSortEvents = (events, day) => {
        const { month, year } = this.state;
        let todayEvents = events.filter(event => {
            let eventDate = new Date(event.date);
            if (eventDate.getFullYear() === year && eventDate.getMonth() === month - 1 && eventDate.getDate() === day) return true;
            return false;
        })
        todayEvents = sortEvents(todayEvents);

        return todayEvents;
    }

    getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    handleArrow = (direction) => {
        const { month, year } = this.state;
        let newMonth, newYear = year;
        if (direction === "left") {
            if (month === 1) {
                newMonth = 12;
                newYear = year - 1;
            } else newMonth = month - 1;
        } else {
            if (month === 12) {
                newMonth = 1;
                newYear = year + 1;
            } else newMonth = month + 1;
        }
        this.setState({ month: newMonth, year: newYear }, this.getEvents)
    }

    render() {
        const { month, year } = this.state;
        const { sidebarOpen } = this.props;
        return (
            <Wrapper>
                <Month>
                    <Arrow onClick={() => this.handleArrow("left")}><svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.68567 11.6714L11.1754 2.18213C11.6329 1.72461 12.3751 1.72461 12.8326 2.18213L13.9396 3.28906C14.3966 3.74609 14.3971 4.48633 13.9415 4.94434L6.42053 12.5L13.941 20.0562C14.3971 20.5142 14.3961 21.2544 13.9391 21.7114L12.8322 22.8184C12.3746 23.2759 11.6324 23.2759 11.1749 22.8184L1.68567 13.3286C1.22815 12.8711 1.22815 12.1289 1.68567 11.6714V11.6714Z" fill="#CCCCCC" />
                    </svg></Arrow>
                    <MonthName>{`${numToMonthName(month)} ${year}`}</MonthName>
                    <Arrow onClick={() => this.handleArrow("right")}> <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9393 13.3287L4.44983 22.8181C3.99216 23.2757 3.25017 23.2757 2.79255 22.8181L1.68577 21.7113C1.22888 21.2544 1.228 20.5139 1.68381 20.056L9.20437 12.5L1.68381 4.9441C1.228 4.48614 1.22888 3.74567 1.68577 3.28878L2.79255 2.18199C3.25022 1.72433 3.99221 1.72433 4.44983 2.18199L13.9392 11.6714C14.3969 12.129 14.3969 12.871 13.9393 13.3287Z" fill="#CCCCCC" />
                    </svg></Arrow>
                </Month>
                <Table sidebarOpen={sidebarOpen}>
                    <thead>
                        <tr>
                            <th>pon</th>
                            <th>wto</th>
                            <th>śro</th>
                            <th>czw</th>
                            <th>pią</th>
                            <th>sob</th>
                            <th>nie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createTable()}
                    </tbody>
                </Table>
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ events }) => ({ events });
const mapDispatchToProps = dispatch => ({
    fetchEvents: (month) => dispatch(fetchEvents(month))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);