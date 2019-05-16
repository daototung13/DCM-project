import React, {useState} from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = BigCalendar.momentLocalizer(moment);
function App() {
  return (
    <div>
      <MyCalendar />
    </div>
  );
}

export default App;








const MyCalendar = (props) => {
  const [events, setEvent] = useState([
    {
      id: 0,
      title: 'Board meeting',
      start: new Date(2019, 4, 16, 9, 0, 0),
      end: new Date(2019, 4, 16, 13, 0, 0),
      resourceId: 1,
    },
    {
      id: 1,
      title: 'MS training',
      allDay: true,
      start: new Date(2019, 4, 16, 14, 0, 0),
      end: new Date(2019, 4, 16, 16, 30, 0),
      resourceId: 2,
    },
    {
      id: 2,
      title: 'Team lead meeting',
      start: new Date(2019, 4, 16, 8, 30, 0),
      end: new Date(2019, 4, 16, 12, 30, 0),
      resourceId: 3,
    },
    {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2019, 4, 16, 7, 0, 0),
      end: new Date(2019, 4, 16, 10, 30, 0),
      resourceId: 4,
    },
  ]);
  const resourceMap = [
    { resourceId: 1, resourceTitle: 'Board room' },
    { resourceId: 2, resourceTitle: 'Training room' },
    { resourceId: 3, resourceTitle: 'Meeting room 1' },
    { resourceId: 4, resourceTitle: 'Meeting room 2' },
  ];

  function handleSelect (props) {

    const {start, end} = props;
    const title = window.prompt('New Event name');
    const id = window.Number(prompt('id'));
    const resourceId = window.Number(prompt('resourceId'));
    if (title) {
      setEvent([
          ...events,
        {
          id,
          start,
          end,
          title,
          resourceId
        }
      ]);
      setTimeout(() => {
        console.log(setEvent.length)
      }, 1000)
    }
  }
  console.log(events)
  return (
      <div className='calendar'>
        <BigCalendar
            selectable
            localizer={localizer}
            events={events}
            defaultView={BigCalendar.Views.DAY}
            onSelectSlot={handleSelect}
            step={24}
            timeslots={1}
            resources={resourceMap}
            resourceIdAccessor="resourceId"
            resourceTitleAccessor="resourceTitle"
        />
      </div>
  );
};
