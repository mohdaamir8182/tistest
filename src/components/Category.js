import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const Category = (props) => {
  const {icon, title, style, onPress} = props;

  return (
    <TouchableOpacity
        activeOpacity={1} 
        onPress={() => onPress(title)}
        style={[{...styles.container},{marginHorizontal: style ? style.marginHorizontal : 0}]}
    >
      <Image source={icon} style={styles.icon} />
      <Text style={{color: '#fff' , fontSize: 10}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    aspectRatio: 1,
    height: 160,
    //width: 130,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'teal',
  },
  icon: {
    height: 65,
    width: 65,
  },
});

export default Category;
