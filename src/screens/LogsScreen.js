import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LogsScreen = props => {
  return (
    <View style={styles.main}>
      <Text>Logs Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogsScreen;
