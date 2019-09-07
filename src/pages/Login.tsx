import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import { Color } from '../styles/Color';
import { login } from '../services/Auth';
import { AsyncConst } from '../config/AsyncConstants';
import { Actions } from 'react-native-router-flux';
import { ProgressDialog } from 'react-native-simple-dialogs';

const Login = () => {
  const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [progressVisible, setProgressVisible] = useState(false);
	const [alert, setAlert] = useState(false);

  const saveUserId = authToken => {
    let values = [
      [AsyncConst.AUTH_TOKEN, authToken],
			[AsyncConst.USERNAME, userName],
			[AsyncConst.isLoggedIn, 'LOGGED_IN']
    ];
    AsyncStorage.multiSet(values).then(() => {
      Actions.main();
    });
  };

	const handleLoginButton = () => {
		if (userName && password) {
			setAlert(false);
			setProgressVisible(true);
      login(userName, password)
        .then((response: any) => {
          var result = response.substring(response.lastIndexOf('=') + 1, response.length).trim();
          var authToken = '';
          if (result === 'TRUE') {
            console.log(response);
            authToken = response.substring(response.indexOf('=') + 1, response.lastIndexOf('RE')).trim();
            saveUserId(authToken);
          } else {
            console.log('Failed:' + response);
					}
					setProgressVisible(false);
        })
				.catch(error => {
					console.log(error);
					setProgressVisible(false);
				});
		} else {
			setAlert(true);
		}
  };

  return (
    <View style={styles.container}>
      <View style={{ maxHeight: '30%' }}>
        <Text style={styles.title}>Login with ZOHO</Text>
      </View>
      <KeyboardAvoidingView
        style={{ maxHeight: '40%', width: '100%', alignItems: 'center' }}
        behavior="padding"
        enabled
      >
        <TextInput
          style={[styles.textInput, { marginTop: 30 }]}
          onChangeText={text => setUserName(text)}
          placeholder={'Email'}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
        />
        <TextInput
          style={[styles.textInput, { marginTop: 10 }]}
          onChangeText={text => setPassword(text)}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
				/>
				{alert ? <Text style={styles.alertText}>** Fill all the fields **</Text> : null}
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
      <Text style={styles.btntext}>Login</Text>
      </TouchableOpacity>
      <ProgressDialog visible={progressVisible} title="Authenticating" message="Please, wait..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: Color.secondary
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: Color.white,
    borderWidth: 1,
    borderRadius: 7,
		paddingLeft: 10,
		color:Color.white,
  },
  button: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Color.white,
    borderRadius: 9,
    marginBottom: 30
	},
	alertText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 16,
		marginTop:20
	},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: Color.white,
    marginBottom: 30
  },
  btntext: {
    color: Color.secondary,
    fontSize: 17,
    paddingTop: 7,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 7
  }
});

export default Login;
