import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';

export default CustomDrawerContent = (props) => {

  // const { user } = useSelector((state) => state.user);
  // const { photoURL , displayName } = user;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    margin: 10,
    paddingHorizontal: 10,
  },
});
