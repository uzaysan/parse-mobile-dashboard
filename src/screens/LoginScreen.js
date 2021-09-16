import React from 'react';
import {StyleSheet, View, ScrollView, Image, Switch, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import EditTextWithIcon from '../components/EditTextWithIcon';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import ButtonWithProgress from '../components/ButtonWithProgress';
import Parse from '../api/Parse';
import Config from '../config';
import {Functions, ToastTypes} from '../utils';

const LoginScreen = ({navigation}) => {
  //Text fields
  const [appId, setApp] = React.useState('');
  const [masterKey, setMaster] = React.useState('');
  const [serverUrl, setServer] = React.useState('');
  //Is loading
  const [loading, setLoading] = React.useState(false);
  // Switch
  const [remember, setRemember] = React.useState(false);
  //Text Change
  const setAppId = text => (!loading ? setApp(text) : null);
  const setMasterKey = text => (!loading ? setMaster(text) : null);
  const setServerUrl = text => (!loading ? setServer(text) : null);
  // Switch toggle
  const switchToggle = value => {
    setRemember(value);
    // Set null to creditentals
    if (!value) removeCreds();
    else setCreds(appId, masterKey, serverUrl);
  };
  //Button click function
  const onButtonClick = async () => {
    setLoading(true);
    Config.applicationId = appId;
    Config.masterKey = masterKey;
    Config.serverUrl = serverUrl;
    const schemas = await Parse.Schema.getAllSchema();
    if (schemas.error) {
      setLoading(false);
      Functions.toastMessage(
        'Error!',
        'Could not connect to server!',
        ToastTypes.TYPE_ERROR,
      );
      return;
    }
    Config.schema = schemas;
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Tabs'}],
      }),
    );
  };

  const getCreds = async () => {
    try {
      const creds = await AsyncStorage.getItem('@creds');
      if (!creds) {
        setRemember(false);
        return;
      }
      const {appId, masterKey, serverUrl} = JSON.parse(creds);
      Config.applicationId = appId;
      Config.masterKey = masterKey;
      Config.serverUrl = serverUrl;
      setAppId(appId);
      setMasterKey(masterKey);
      setServerUrl(serverUrl);
      setRemember(true);
    } catch (err) {
      console.log(err);
      Functions.toastMessage(
        'Error!',
        'Creditentals could not be retrieved!',
        ToastTypes.TYPE_ERROR,
      );
    }
  };

  const setCreds = async (appId, masterKey, serverUrl) => {
    try {
      const cred = {appId, masterKey, serverUrl};
      await AsyncStorage.setItem('@creds', JSON.stringify(cred));
    } catch (err) {
      Functions.toastMessage(
        'Error!',
        'Creditentals could not be saved!',
        ToastTypes.TYPE_ERROR,
      );
    }
  };

  const removeCreds = async () => {
    try {
      await AsyncStorage.removeItem('@creds');
    } catch (err) {
      Functions.toastMessage(
        'Error!',
        'Creditentals could not be saved!',
        ToastTypes.TYPE_ERROR,
      );
    }
  };

  React.useEffect(() => {
    getCreds();
  }, []);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.main}>
        <View style={styles.parseLogo}>
          <Image
            style={styles.logoImage}
            fadeDuration={0}
            source={require('../assets/parse-logo.png')}
            resizeMode="center"
          />
        </View>
        <EditTextWithIcon
          icon={<Ionicons name="ios-finger-print" size={28} color="black" />}
          style={styles.textInputStyle}
          placeholder={'Application Id'}
          value={appId}
          onChangeText={setAppId}
          multiline={false}
        />
        <EditTextWithIcon
          icon={<Ionicons name="key" size={28} color="black" />}
          style={styles.textInputStyle}
          placeholder={'Master Key'}
          value={masterKey}
          onChangeText={setMasterKey}
          multiline={false}
          secureTextEntry={true}
        />
        <EditTextWithIcon
          icon={<Ionicons name="link" size={28} color="black" />}
          style={styles.textInputStyle}
          placeholder={'Server Url'}
          value={serverUrl}
          onChangeText={setServerUrl}
          multiline={false}
        />
        <View style={styles.switchField}>
          <Switch onValueChange={switchToggle} value={remember} />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <ButtonWithProgress
          style={styles.buttonStyle}
          onPress={onButtonClick}
          buttonText={'Continue'}
          progressColor={'#169CEE'}
          isLoading={loading}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#169CEE',
  },
  textInputStyle: {
    width: '90%',
    height: 50,
    marginBottom: 15,
  },
  parseLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    marginBottom: 25,
    marginTop: 130,
    overflow: 'hidden',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  buttonStyle: {
    width: '90%',
    height: 50,
  },
  switchField: {
    width: '90%',
    height: 40,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    color: 'white',
    marginLeft: 5,
  },
});

export default LoginScreen;
