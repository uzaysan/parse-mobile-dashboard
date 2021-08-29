import Toast from 'react-native-toast-message';
export const ToastTypes = {
  TYPE_INFO: 'info',
  TYPE_SUCCESS: 'success',
  TYPE_ERROR: 'error',
};
export const Functions = {
  toastMessage(title, msg, type = ToastTypes.TYPE_INFO) {
    Toast.show({
      type: type,
      text1: title,
      text2: msg,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 750,
    });
  },
};
