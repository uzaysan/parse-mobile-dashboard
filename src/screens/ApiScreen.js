import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ApiScreen = props => {
  return (
    <View style={styles.main}>
      <Text>Api Screen</Text>
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

export default ApiScreen;
