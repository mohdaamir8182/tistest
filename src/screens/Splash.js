import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../components/Logo';

const Splash = (props) => {

    const {navigation} = props;

    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('fblogin');
        }, 2000);
      }, []);

    return (
        <View style={styles.container}>
            <Logo />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cdd0cb'
    },
    
})

export default Splash;


