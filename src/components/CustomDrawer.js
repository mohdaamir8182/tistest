import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useSelector, useDispatch } from 'react-redux';
import {drawerItems} from '../utils/data';
import { LoginManager } from 'react-native-fbsdk';
import { logoutUser } from '../redux/actions/loginActions';



export default CustomDrawerContent = (props) => {

  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.user);

  const logout = () => {
    LoginManager.logOut();
    dispatch(logoutUser());
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerScrollStyle}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: user.picture.data.url}}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.name}>{`Nice to meet you ${user.name}`}</Text>
        </View>

        {drawerItems.map((item) => (
          <View style={styles.customDrawerItem} key={item.id}>
            <Text style={styles.customTitle}>{item.name}</Text>
          </View>
        ))}
          <TouchableOpacity
            style={styles.customDrawerItem} 
            onPress={logout}
          >
            <Text style={styles.customTitle}>Logout</Text>
          </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#290149',
    paddingLeft: 20,
  },
  drawerScrollStyle: {
    paddingTop: 50,
    paddingBottom: 30,
  },
  header: {
    height: 260,
    margin: 10,
    paddingHorizontal: 10,
  },
  imageContainer: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  name: {
    color: '#fff',
    marginTop: 15,
  },
  customDrawerItem: {
    marginVertical: 15,
    paddingLeft: 20,
  },
  customTitle: {
    color: '#fff',
    fontSize: 18,
  },
});
