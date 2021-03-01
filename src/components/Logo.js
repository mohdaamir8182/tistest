import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Logo = () => {
  return <Image source={require('../assets/logo.png')} style={styles.logo} />;
};

const styles = StyleSheet.create({
    logo:{
        height: 200,
        width: 200
    }
});

export default Logo;


