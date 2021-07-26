import dayjs from 'dayjs';

const BASE_SUNDAY_DATE = dayjs('01/04/1970');

export const generateWeekdays = (format?: string, startOnMonday?: boolean) => {
  const templateDate = startOnMonday
    ? BASE_SUNDAY_DATE.add(1, 'day')
    : BASE_SUNDAY_DATE;
  const weekdays: string[] = [templateDate.format(format || 'dd')];

  for (let i = 1; i <= 6; i++) {
    weekdays.push(templateDate.add(i, 'day').format(format || 'dd'));
  }

  return weekdays;
};
