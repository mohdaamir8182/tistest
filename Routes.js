import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './src/screens/Splash';
import Fblogin from './src/screens/Fblogin';
import CustomDrawerContent from './src/components/CustomDrawer';
import Home from './src/screens/Drawer/Home';
import OffersListing from './src/screens/Drawer/OffersListing';
import OfferDetails from './src/screens/Drawer/OfferDetails';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function OffersStackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="offerlisting" component={OffersListing} />
      <Stack.Screen name="offerdetails" component={OfferDetails} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => CustomDrawerContent({...props})}
      screenOptions={{}}>
      <Drawer.Screen name="home" component={OffersStackNavigator} />
    </Drawer.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <Stack.Navigator  initialRouteName="drawer">
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="fblogin" component={Fblogin} />
      <Stack.Screen name="drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
