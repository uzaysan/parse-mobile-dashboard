import React from 'react';
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const iconSize = 26;

const BottomBar = ({state, navigation}) => {
  const onClick = index => {
    let tabName;
    switch (index) {
      case 0:
        tabName = 'DatabaseScreen';
        break;
      case 1:
        tabName = 'WebhooksScreen';
        break;
      case 2:
        tabName = 'LogsScreen';
        break;
      case 3:
        tabName = 'ConfigScreen';
        break;
      case 4:
        tabName = 'ApiScreen';
        break;
      default:
        tabName = 'BrowserScreen';
        break;
    }
    const event = navigation.emit({
      type: 'tabPress',
      target: index,
    });
    if (!event.defaultPrevented) {
      navigation.navigate(tabName);
    }
  };
  return (
    <View style={styles.main}>
      <TouchableHighlight
        onPress={() => onClick(0)}
        underlayColor={'#EEEEEE'}
        style={styles.touchable}>
        <View style={styles.touchableChild}>
          <View style={styles.innerView}>
            <MaterialCommunityIcons
              name={
                state.index === 0
                  ? 'hexagon-multiple'
                  : 'hexagon-multiple-outline'
              }
              size={iconSize}
              color="black"
            />
            <Text
              style={
                state.index === 0
                  ? styles.text
                  : {...styles.text, fontWeight: 'normal'}
              }>
              Database
            </Text>
          </View>
          {state.index === 0 && <View style={styles.topLine} />}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => onClick(1)}
        underlayColor={'#EEEEEE'}
        style={styles.touchable}>
        <View style={styles.touchableChild}>
          <View style={styles.innerView}>
            <MaterialCommunityIcons
              name={state.index === 1 ? 'alarm-light' : 'alarm-light-outline'}
              size={iconSize}
              color="black"
            />
            <Text
              style={
                state.index === 1
                  ? styles.text
                  : {...styles.text, fontWeight: 'normal'}
              }>
              Webhooks
            </Text>
          </View>
          {state.index === 1 && <View style={styles.topLine} />}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => onClick(2)}
        underlayColor={'#EEEEEE'}
        style={styles.touchable}>
        <View style={styles.touchableChild}>
          <View style={styles.innerView}>
            <Ionicons
              name={
                state.index === 2
                  ? 'ios-document-text'
                  : 'ios-document-text-outline'
              }
              size={iconSize}
              color="black"
            />
            <Text
              style={
                state.index === 2
                  ? styles.text
                  : {...styles.text, fontWeight: 'normal'}
              }>
              Logs
            </Text>
          </View>
          {state.index === 2 && <View style={styles.topLine} />}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => onClick(3)}
        underlayColor={'#EEEEEE'}
        style={styles.touchable}>
        <View style={styles.touchableChild}>
          <View style={styles.innerView}>
            <Ionicons
              name={state.index === 3 ? 'settings' : 'settings-outline'}
              size={iconSize}
              color="black"
            />
            <Text
              style={
                state.index === 3
                  ? styles.text
                  : {...styles.text, fontWeight: 'normal'}
              }>
              Config
            </Text>
          </View>
          {state.index === 3 && <View style={styles.topLine} />}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => onClick(4)}
        underlayColor={'#EEEEEE'}
        style={styles.touchable}>
        <View style={styles.touchableChild}>
          <View style={styles.innerView}>
            <Ionicons
              name={
                state.index === 4
                  ? 'ios-chevron-up-circle'
                  : 'ios-chevron-up-circle-outline'
              }
              size={iconSize}
              color="black"
            />
            <Text
              style={
                state.index === 4
                  ? styles.text
                  : {...styles.text, fontWeight: 'normal'}
              }>
              Other
            </Text>
          </View>
          {state.index === 4 && <View style={styles.topLine} />}
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 52,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  touchable: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableChild: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView: {
    alignItems: 'center',
    marginTop: 4,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  topLine: {
    width: '100%',
    height: 3,
    backgroundColor: '#169CEE',
    position: 'absolute',
    top: 0,
  },
});

export default BottomBar;
