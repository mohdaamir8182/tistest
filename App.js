import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {LoginStackNavigator , LogoutStackNavigator} from './Routes';
import {useSelector} from 'react-redux';

const App = () => {

  const { user } = useSelector(state => state.user);

  return (
    <SafeAreaView style={{flex: 1}}>
      
        <NavigationContainer>
          {
            user === null ? 
            <LogoutStackNavigator /> :
            <LoginStackNavigator />
          }
        </NavigationContainer>
      
    </SafeAreaView>
  );
};

export default App;
