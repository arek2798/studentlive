import React from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate';
import Calendar from '../../components/organisms/Calendar/Calendar';
import AddEvent from '../../components/organisms/AddEvent/AddEvent';
import EventsList from '../../components/organisms/EventsList/EventsList';

class CalendarView extends React.Component {
    state = {
        sidebarActive: false,
        addNewSidebarOpen: false,
        date: '',
        todayEvents: []
    }

    sidebarClose = () => {
        this.setState({
            sidebarActive: false
        })
    }

    addNewSiebarToggle = () => {
        this.setState(prevState => ({
            addNewSidebarOpen: !prevState.addNewSidebarOpen,
            sidebarActive: false
        }))
    }

    changeSelectDay = (date, todayEvents, sidebarOpen = true) => {
        this.setState({
            sidebarActive: sidebarOpen,
            date,
            todayEvents: [...todayEvents]
        })
    }

    updateEvents = (todayEvents) => {
        this.setState({
            todayEvents: [...todayEvents]
        })
    }

    updateDay = () => {
        this.setState({})
    }

    render() {
        const { sidebarActive, addNewSidebarOpen, date, todayEvents } = this.state;
        return (
            <UserPageTemplate>
                <Calendar changeSelectDay={this.changeSelectDay} sidebarOpen={sidebarActive} />
                <EventsList sidebarActive={sidebarActive} sidebarToggle={this.addNewSiebarToggle} sidebarClose={this.sidebarClose} date={date} todayEvents={todayEvents} updateEvents={this.updateEvents} />
                <AddEvent sidebarActive={addNewSidebarOpen} sidebarToggle={this.addNewSiebarToggle} date={date} />
            </UserPageTemplate>
        )
    }
}

export default CalendarView;