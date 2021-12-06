import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, StyleSheet, Text, View } from 'react-native';

import homeTabIcon from '../assets/icons/home.png'
import travelTabIcon from '../assets/icons/globe.png'
import mapTabIcon from '../assets/icons/map.png'
import teamTabIcon from '../assets/icons/team.png'
import Explore from './tabs/Explore';
import ChoiseTravel from './stacks/ChoiseTravel';
import Home from './tabs/Home';
import useLogin from '../hooks/useLogin';
import Login from './Login';
import AuthContext from '../store/contexts/AuthContext';

const Tab = createBottomTabNavigator();

const icons = {
  "Accueil": homeTabIcon,
  "Explorer": mapTabIcon,
  "Mes voyages": travelTabIcon,
  "Mes troupes": teamTabIcon
}

const AppNavigation = () => {
  const { state } = useContext(AuthContext)

  return state.user ? (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Accueil"
        screenOptions={({ route }) => ({
          tabBarIcon: () => (
            <Image source={icons[route.name] || homeTabIcon} style={styles.icon} />
          )
        })}
      >
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Explorer" component={Explore} />
        <Tab.Screen name="Mes voyages" component={ChoiseTravel} />
        <Tab.Screen name="Mes troupes" component={Explore} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : <Login />
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default AppNavigation
