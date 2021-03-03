import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useDeviceOrientation } from "@react-native-community/hooks";

const Category = (props) => {

  const { portrait } = useDeviceOrientation();

  const {icon, title, style, onPress} = props;

  return (
    <TouchableOpacity
        activeOpacity={1} 
        onPress={() => onPress(title)}
        style={[{...styles.container},{marginHorizontal: style ? style.marginHorizontal : 0, aspectRatio: portrait ? 1 : null , flex: portrait ? 1/3 : 0}]}
    >
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1/3 ,
    //aspectRatio: 1,
    height: 160,
    width: 160,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: 'teal',
    paddingTop: 10,
    paddingBottom: 10
  },
  icon: {
    height: 65,
    width: 65,
  },
  title:{
    color: '#fff' ,
    fontSize: 8,
    textAlign: 'center',
    marginTop: 10
    //marginBottom: 30
  }
});

export default Category;
