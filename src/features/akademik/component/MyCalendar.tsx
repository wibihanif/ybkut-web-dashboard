import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState([
    {
      title: 'Event 1',
      start: new Date(2023, 11, 5, 10, 0),
      end: new Date(2023, 11, 5, 14, 0),
    },
    {
      title: 'Event 2',
      start: new Date(2023, 11, 5, 14, 0),
      end: new Date(2023, 11, 5, 18, 0),
    },
    {
      title: 'Event 3',
      start: new Date(2023, 11, 15, 10, 0),
      end: new Date(2023, 11, 15, 14, 0),
    },
  ]);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700, borderRadius: 15 }}
        eventPropGetter={() => ({
          style: {
            borderRadius: 8,
          },
        })}
        // resizable
        // onEventResize={handleEventResize}
      />
    </div>
  );
};

export default MyCalendar;
