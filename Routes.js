import React from 'react';
import { View , Image, TouchableOpacity } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './src/screens/Splash';
import Fblogin from './src/screens/Fblogin';
import CustomDrawerContent from './src/components/CustomDrawer';
import Home from './src/screens/Bottom/Home';
import OffersListing from './src/screens/Bottom/OffersListing';
import OfferDetails from './src/screens/Bottom/OfferDetails';
import Tabicon from './src/components/Tabicon';
import Dummy from './src/screens/Dummy';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export function LoginStackNavigator() {
  return (
    <Stack.Navigator headerMode="none"  initialRouteName="drawer">
      <Stack.Screen 
        name="drawer" 
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  );
}

export function LogoutStackNavigator() {
  return (
    <Stack.Navigator headerMode="none"  initialRouteName="splash">
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="fblogin" component={Fblogin} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerType = "slide" 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="home" component={BottomTabsNAvigator} />
    </Drawer.Navigator>
  );
}

function BottomTabsNAvigator() {
  return (
    <Tab.Navigator initialRouteName="home"
      tabBarOptions={{
        activeTintColor: "#75cfb8",
        inactiveTintColor: "#d0d0d0",
        showLabel: false,
        style: { height: 80, backgroundColor: "#f0f0f0", borderTopWidth: 0, borderColor: null},
      }}
    >
      <Tab.Screen 
        name="menu" 
        component={Dummy}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Tabicon
                icon={require('./src/assets/menubottom.png')}
                focused={focused}
                color={color}
                size={size}
              />
            );
          },
        }} 
      />
      <Tab.Screen 
        name="location" 
        component={Dummy}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Tabicon
                icon={require('./src/assets/location.png')}
                focused={focused}
                color={color}
                size={size}
              />
            );
          },
        }} 
      />
      <Tab.Screen 
        name="home" 
        component={OffersStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Tabicon
                icon={require('./src/assets/home.png')}
                focused={focused}
                color={color}
                size={size}
              />
            );
          },
        }} 
      />
      <Tab.Screen 
        name="favorites" 
        component={Dummy}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Tabicon
                icon={require('./src/assets/heart.png')}
                focused={focused}
                color={color}
                size={size}
              />
            );
          },
        }} 
      />
      <Tab.Screen 
        name="profile" 
        component={Dummy}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Tabicon
                icon={require('./src/assets/avatar.png')}
                focused={focused}
                color={color}
                size={size}
              />
            );
          },
        }} 
      />
    </Tab.Navigator>
  );
}

function OffersStackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="home">
      <Stack.Screen name="home" component={Home} options={{title:"Others"}} />
      <Stack.Screen name="offerlisting" component={OffersListing} />
      <Stack.Screen name="offerdetails" component={OfferDetails} />
    </Stack.Navigator>
  );
}


