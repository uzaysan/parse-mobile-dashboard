import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const EditTextWithIcon = ({
  style,
  icon,
  placeholder,
  textStyle,
  value,
  onChangeText,
  secureTextEntry,
  multiline,
}) => {
  return (
    <View style={{...styles.main, ...style}}>
      {icon && <View style={styles.iconLayout}>{icon}</View>}
      <View style={styles.textLayout}>
        <TextInput
          style={{...styles.textStyle, ...textStyle}}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 50,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
  },
  iconLayout: {
    height: '100%',
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textLayout: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textStyle: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
});

export default EditTextWithIcon;
