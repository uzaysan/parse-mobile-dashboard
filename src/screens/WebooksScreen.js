import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Functions, ToastTypes} from '../utils';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const WebooksScreen = ({navigation}) => {
  const addHook = () =>
    Functions.toastMessage(
      'Clicked',
      'Clicked to add hook button',
      ToastTypes.TYPE_SUCCESS,
    );
  return (
    <View style={styles.main}>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarText}>Webhooks</Text>
        <TouchableHighlight
          underlayColor={'#EEEEEE'}
          onPress={addHook}
          style={styles.addHookButton}>
          <Ionicons name="ios-add" size={30} color="black" />
        </TouchableHighlight>
      </View>
      <FlatList style={styles.flatList} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  toolbar: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  toolbarText: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    marginLeft: 15,
    color: 'black',
  },
  addHookButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  flatList: {
    flex: 1,
  },
});

export default WebooksScreen;
