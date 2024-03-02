import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar as MantineCalendar } from '@mantine/dates';

export default function Calendar() {
  const [selected, setSelected] = useState<Date[]>([]);

  const handleSelect = (date: Date) => {
    const isSelected = selected.some(s => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected(current => current.filter(d => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected(current => [...current, date]);
    }
  };

  return (
    <MantineCalendar
      getDayProps={date => ({
        selected: selected.some(s => dayjs(date).isSame(s, 'date')),
        onClick: () => handleSelect(date),
      })}
    />
  );
}
