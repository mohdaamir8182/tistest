import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {LoginManager, AccessToken, GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
import { useDispatch} from 'react-redux';
import {saveUserInfo} from '../redux/actions/loginActions';
import Logo from '../components/Logo';
import Button from '../components/Button';

const Fblogin = (props) => {

  const [] = useState({});
  const dispatch = useDispatch();


  const onFacebookButtonPress = async () => {
    
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    try{
      const graphRequest = new GraphRequest('/me', {
        accessToken: data.accessToken,
        parameters: {
          fields: {
            string: 'name , picture.type(large)',
          },
        },
      }, (error, result) => {
        if (error) {
          console.log(error)
        } else {
          dispatch(saveUserInfo(result));
        }
      })
    
      new GraphRequestManager().addRequest(graphRequest).start();

    }catch(err){

      Alert.alert("Error logging in with Fb. Try again...")

    }

  };

  return (
    <View style={styles.container}>
      <Logo />

      <Button title="Login with Facebook" onPress={onFacebookButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#cdd0cb'
  },
});

export default Fblogin;
