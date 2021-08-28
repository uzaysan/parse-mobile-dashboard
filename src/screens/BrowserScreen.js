import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BrowserScreen = props => {
  return (
    <View style={styles.main}>
      <Text>Browser Screen</Text>
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

export default BrowserScreen;
