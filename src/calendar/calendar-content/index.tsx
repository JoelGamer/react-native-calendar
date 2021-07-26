import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import type { Dayjs } from 'dayjs';
import { generateWeeks } from '../../utils';
import styles from './styles';

const CalendarDay: FC<CalendarDayProps> = (props) => {
  return (
    <View style={styles.weekDayContainer}>
      <Text style={styles.weekDayText}>{props.day}</Text>
    </View>
  );
};

interface CalendarDayProps {
  day: string | null;
}

const CalendarWeek: FC<CalendarWeekProps> = (props) => {
  return (
    <View style={styles.weekContainer}>
      {props.week.map((day, index) => (
        <CalendarDay key={index} day={day} />
      ))}
    </View>
  );
};

interface CalendarWeekProps {
  week: (string | null)[];
}

const CalendarMonth: FC<CalendarMonthProps> = (props) => {
  const weeks = useMemo(
    () => generateWeeks(props.currentMonth, props.startOnMonday),
    [props.currentMonth, props.startOnMonday]
  );

  return (
    <>
      {weeks.map((week) => (
        <CalendarWeek week={week} />
      ))}
    </>
  );
};

interface CalendarMonthProps {
  currentMonth: Dayjs;
  startOnMonday?: boolean;
}

const CalendarContent: FC<CalendarContentProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CalendarMonth
          currentMonth={props.currentMonth}
          startOnMonday={props.startOnMonday}
        />
      </View>
    </View>
  );
};

export default CalendarContent;

interface CalendarContentProps {
  currentMonth: Dayjs;
  startOnMonday?: boolean;
}
