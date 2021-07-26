import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Calendar from 'react-native-calendar';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Calendar
        onRequestClose={() => setIsVisible(false)}
        visible={isVisible}
      />
      <TouchableHighlight
        onPress={() => setIsVisible((prevValue) => !prevValue)}
      >
        <Text>Press Me!</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
