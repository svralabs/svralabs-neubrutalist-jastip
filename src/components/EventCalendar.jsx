import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function EventCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const events = [
    {
      id: 1,
      title: 'Order #12345 - Processing',
      start: new Date(2023, 7, 15, 10, 0),
      end: new Date(2023, 7, 15, 12, 0),
      color: 'bg-accent-yellow',
    },
    {
      id: 2,
      title: 'Order #67890 - Shipped',
      start: new Date(2023, 7, 16, 14, 0),
      end: new Date(2023, 7, 16, 16, 0),
      color: 'bg-accent-blue',
    },
    {
      id: 3,
      title: 'Order #54321 - Delivered',
      start: new Date(2023, 7, 17, 9, 0),
      end: new Date(2023, 7, 17, 11, 0),
      color: 'bg-accent-green',
    },
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-sm text-center"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayEvents = events.filter(event =>
        event.start.getDate() === day &&
        event.start.getMonth() === month &&
        event.start.getFullYear() === year
      );

      days.push(
        <div key={`day-${day}`} className="p-sm border border-border-black rounded">
          <div className="text-center font-bold">{day}</div>
          {dayEvents.map(event => (
            <div
              key={event.id}
              className={`${event.color} text-white p-xs rounded mt-xs text-xs truncate`}
              title={event.title}
            >
              {event.title}
            </div>
          ))}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-surface border border-border-black rounded-xl p-lg">
      <div className="flex justify-between items-center mb-md">
        <button onClick={prevMonth} className="p-sm">
          <ChevronLeft />
        </button>
        <h2 className="text-xl font-bold">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={nextMonth} className="p-sm">
          <ChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-xs">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center font-bold p-sm">{day}</div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  );
}
