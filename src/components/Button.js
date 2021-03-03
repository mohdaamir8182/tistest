import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const Button = (props) => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={require('../assets/fb.png')}
        style={styles.fbImage}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: 30,
  },
  fbImage: {
    height: 40,
    width: 40,
    tintColor: '#fff',
  },
});

export default Button;
