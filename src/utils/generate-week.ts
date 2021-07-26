import type { Dayjs } from 'dayjs';

const validateDayInWeekday = (
  week: (string | null)[],
  day: Dayjs,
  startOnMonday?: boolean
) => {
  if (startOnMonday) {
    if (week.length + 1 > 6 && day.day() === 0) return true;
    return week.length + 1 === day.day();
  }

  return week.length === day.day();
};

const generateWeek = (currentDate: Dayjs, startOnMonday?: boolean) => {
  const week: (string | null)[] = [];
  let newCurrentDate = currentDate;

  for (let i = 0; i < 7; i++) {
    if (currentDate.month() !== newCurrentDate.month()) {
      week.push(null);
    }

    if (validateDayInWeekday(week, newCurrentDate, startOnMonday)) {
      week.push(newCurrentDate.format('DD'));
      newCurrentDate = newCurrentDate.add(1, 'day');
    } else {
      week.push(null);
    }
  }

  return { week, newCurrentDate };
};

export const generateWeeks = (currentDate: Dayjs, startOnMonday?: boolean) => {
  const weeks = [];
  const month = currentDate.startOf('month');
  let currentMonthDay = month;

  for (let i = 1; i <= 5; i++) {
    const { week, newCurrentDate } = generateWeek(
      currentMonthDay,
      startOnMonday
    );
    currentMonthDay = newCurrentDate;
    weeks.push(week);
  }

  return weeks;
};
