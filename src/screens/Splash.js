import React, {useEffect} from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Logo from '../components/Logo';

const Splash = (props) => {

    const {navigation} = props;

    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('fblogin');
        }, 2000);
      }, []);

    return (
        <ImageBackground source={require('../assets/bgsplash.jpeg')} resizeMode="cover" style={styles.container} >
            <Logo />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cdd0cb'
    },
    
})

export default Splash;


