import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const iconSize = 26;

const BottomBar = ({state, navigation}) => {
  const onClick = index => {
    console.log('Clicked to :', index);
  };
  return (
    <View style={styles.main}>
      <TouchableHighlight
        onPress={() => onClick(0)}
        underlayColor={'white'}
        style={styles.touchable}>
        <View style={styles.innerView}>
          <Ionicons
            name={state.index === 0 ? 'ios-layers' : 'ios-layers-outline'}
            size={iconSize}
            color="black"
          />
          {state.index === 0 && <Text style={styles.text}>Browser</Text>}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => onClick(1)}
        underlayColor={'white'}
        style={styles.touchable}>
        <View style={styles.innerView}>
          <MaterialCommunityIcons
            name={
              state.index === 1 ? 'upload-network-outline' : 'upload-network'
            }
            size={iconSize}
            color="black"
          />
          {state.index === 1 && <Text style={styles.text}>Api</Text>}
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView: {
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BottomBar;
