import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    width: '100%',
  },
  monthDisplayContainer: {
    flex: 0.5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  weekdaysContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  weekdaysText: {
    margin: 10,
  },
  weekdayContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
