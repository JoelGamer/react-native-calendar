import React, { ComponentProps, FC, useState } from 'react';
import { Modal, View, ViewStyle } from 'react-native';
import dayjs from 'dayjs';
import CalendarContent from './calendar-content';
import CalendarHeader from './calendar-header';
import styles from './styles';

const Calendar: FC<CalendarProps> = (props) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const onNextMonth = () => {
    setCurrentMonth((prevValue) => prevValue.add(1, 'month'));
  };

  const onPreviousMonth = () => {
    setCurrentMonth((prevValue) => prevValue.subtract(1, 'month'));
  };

  return (
    <Modal
      animationType="fade"
      onRequestClose={props.onRequestClose}
      visible={props.visible}
      transparent
    >
      <View style={{ ...styles.container, ...props.containerStyle }}>
        <View
          style={{ ...styles.displayContainer, ...props.displayContainerStyle }}
        >
          <CalendarHeader
            currentMonth={currentMonth}
            onNextMonth={onNextMonth}
            onPreviousMonth={onPreviousMonth}
          />
          <CalendarContent currentMonth={currentMonth} />
        </View>
      </View>
    </Modal>
  );
};

export default Calendar;

interface CalendarProps extends ComponentProps<typeof Modal> {
  onRequestClose: () => void;
  containerStyle?: ViewStyle;
  displayContainerStyle?: ViewStyle;
  startOnMonday?: boolean;
}
