import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ConfigScreen = props => {
  return (
    <View style={styles.main}>
      <Text>Config Screen</Text>
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

export default ConfigScreen;
