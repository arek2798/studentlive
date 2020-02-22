import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const myEventsList = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: false,
        start: new Date(2020, 2, 20, 11, 0),
        end: new Date(2020, 2, 20, 12, 15),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2020, 3, 7),
        end: new Date(2020, 3, 10),
    },
    {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2020, 2, 13, 0, 0, 0),
        end: new Date(2020, 2, 20, 0, 0, 0),
    },

    {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2020, 10, 6, 0, 0, 0),
        end: new Date(2020, 10, 13, 0, 0, 0),
    },

    {
        id: 4,
        title: 'Some Event',
        start: new Date(2020, 3, 9, 0, 0, 0),
        end: new Date(2020, 3, 10, 0, 0, 0),
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(2020, 3, 11),
        end: new Date(2020, 3, 13),
        desc: 'Big conference for important people',
    },
]

export const MyCalendar = () => (
    <div style={{ height: '500pt' }}>
        <Calendar
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
        />
    </div>
)

// export default MyCalendar;