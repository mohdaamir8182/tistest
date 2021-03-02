import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderIcon from './HeaderIcon';

const Header = (props) => {

    const {  title, leftIcon, onLeftIconPress } = props;

  return (
    <View style={styles.container}>

      <View style={styles.leftIcon}>
        <HeaderIcon
            icon={leftIcon}
            onPress={onLeftIconPress} 
        />
      </View>

      <View style={styles.rightIcon}>
        <Text style={styles.title}>
            {title}
        </Text>
      </View>

      <View style={styles.leftIcon}>
        
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'teal',
  },
  titleContainer: {
    flex: 3,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  leftIcon: {
    flex: 1,
  },
  rightIcon: {
    flex: 1,
  },
});

export default Header;
