import React from 'react';
import { TouchableOpacity, Image, StyleSheet} from 'react-native';

const HeaderIcon = (props) => {

  const { icon , onPress } = props;

  return (
    <TouchableOpacity
      activeOpacity={1} 
      style={{paddingLeft: 20}} 
      onPress={onPress} 
    >
      <Image
        source={icon}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon:{
    height: 35, 
    width: 35, 
    tintColor: '#fff'
  }
})

export default HeaderIcon;

