import React from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import EditTextWithIcon from '../components/EditTextWithIcon';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import ButtonWithprogress from '../components/ButtonWithProgress';
import Parse from '../api/Parse';
import Config from '../config';

const LoginScreen = props => {
  //Text states
  const [appId, setApp] = React.useState('');
  const [masterKey, setMaster] = React.useState('');
  const [serverUrl, setServer] = React.useState('');
  //Loading state
  const [loading, setLoading] = React.useState(false);
  //Text Change
  const setAppId = text => (!loading ? setApp(text) : null);
  const setMasterKey = text => (!loading ? setMaster(text) : null);
  const setServerUrl = text => (!loading ? setServer(text) : null);
  //Button click function
  const onButtonClick = async () => {
    setLoading(true);
    Config.applicationId = appId;
    Config.masterKey = masterKey;
    Config.serverUrl = serverUrl;
    const schemas = await Parse.Schema.getAllSchema();
    console.log(schemas);
    setLoading(false);
  };

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
        <ButtonWithprogress
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
});

export default LoginScreen;
