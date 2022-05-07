import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { Image, StyleSheet } from 'react-native';

import homeTabIcon from '../../assets/icons/home.png'
import travelTabIcon from '../../assets/icons/globe.png'
import mapTabIcon from '../../assets/icons/map.png'
import teamTabIcon from '../../assets/icons/team.png'

import Explore from '../tabs/Explore';
import HomeNavigation from './HomeNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';



const icons = {
  "Accueil": homeTabIcon,
  "Explorer": mapTabIcon,
  "Mes voyages": travelTabIcon,
  "Mes troupes": teamTabIcon
}

const screenOptions = ({ route }) => ({
  tabBarIcon: () => <Image source={icons[route.name] || homeTabIcon} style={styles.icon} />
})

const Main = () => {
  return <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Accueil"
        screenOptions={screenOptions}
      >
        <Tab.Screen options={{ headerShown: false }} name="Accueil" component={HomeNavigation} />
        <Tab.Screen options={{ headerShown: false }} name="Explorer" component={Explore} />
        {/* <Tab.Screen options={{ headerShown: false }} name="Mes voyages" component={() => <></>} /> */}
        <Tab.Screen options={{ headerShown: false }} name="Mes troupes" component={Explore} />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25
  }
})

export default Main