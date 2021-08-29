import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Navigation from './src/navigation/Navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle="light-content" backgroundColor="#169CEE" />
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
