import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  weekDayText: {
    margin: 10,
  },
  weekDayContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default styles;
