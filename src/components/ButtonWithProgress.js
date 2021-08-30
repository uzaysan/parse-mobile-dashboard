import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from 'react-native';

const ButtonWithprogress = ({
  isLoading,
  onPress,
  style,
  underlayColor,
  buttonText,
  progressColor,
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={underlayColor || '#EEEEEE'}
      style={{...styles.main, ...style}}>
      <View style={styles.innerView}>
        {!isLoading && <Text>{buttonText}</Text>}
        {isLoading && (
          <ActivityIndicator size={30} color={progressColor || 'black'} />
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  innerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonWithprogress;
