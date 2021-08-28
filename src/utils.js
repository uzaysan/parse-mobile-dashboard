import Toast from 'react-native-toast-message';

export const Functions = {
  toastMessage(title, msg, type = 'info') {
    Toast.show({
      type: type,
      text1: title,
      text2: msg,
    });
  },
};
