import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {useSelector, useDispatch} from 'react-redux';
import {saveUserInfo} from '../../redux/actions/loginActions';
import Logo from '../components/Logo';
import Button from '../components/Button';

const Fblogin = (props) => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const {user, error} = useSelector((state) => state.user);

  console.log('REDUX_STATE...:', user, error);

  const onFacebookButtonPress = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

  const login = async () => {
    const res = await onFacebookButtonPress();
    //console.log("USER....:" , res);
    dispatch(saveUserInfo(res.user._user));

    navigation.navigate('drawer');
  };

  return (
    <View style={styles.container}>
      <Logo />

      <Button title="Login with Facebook" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});

export default Fblogin;
