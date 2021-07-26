import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import CalendarMonthDisplay, {
  CalendarMonthDisplayProps,
} from './month-display';
import { generateWeekdays } from '../../utils';
import styles from './styles';

const CalendarHeader: FC<CalendarHeaderProps> = (props) => {
  const weekdays = useMemo(
    () => generateWeekdays(props.weekdayFormat, props.startOnMonday),
    [props.weekdayFormat, props.startOnMonday]
  );

  return (
    <View style={styles.container}>
      <CalendarMonthDisplay
        currentMonth={props.currentMonth}
        onNextMonth={props.onNextMonth}
        onPreviousMonth={props.onPreviousMonth}
      />
      <View style={styles.weekdaysContainer}>
        {weekdays.map((weekday, index) => (
          <View style={styles.weekdayContainer}>
            <Text key={index} style={styles.weekdaysText}>
              {weekday}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CalendarHeader;

interface CalendarHeaderProps extends CalendarMonthDisplayProps {
  weekdayFormat?: string;
  startOnMonday?: boolean;
}
