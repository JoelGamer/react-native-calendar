import type { Dayjs } from 'dayjs';
import React, { FC, useMemo } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';

const CalendarMonthDisplay: FC<CalendarMonthDisplayProps> = (props) => {
  const currentMonth = useMemo(
    () => props.currentMonth.format('MMMM'),
    [props.currentMonth]
  );

  return (
    <View style={styles.monthDisplayContainer}>
      <TouchableHighlight onPress={props.onPreviousMonth}>
        <Text>Previous</Text>
      </TouchableHighlight>
      <Text style={styles.monthDisplayText}>{currentMonth}</Text>
      <TouchableHighlight onPress={props.onNextMonth}>
        <Text>Next</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CalendarMonthDisplay;

export interface CalendarMonthDisplayProps {
  currentMonth: Dayjs;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}
