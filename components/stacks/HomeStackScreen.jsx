import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Explore from '../tabs/Explore';
import Home from '../tabs/Home';
import ChoiseTravel from './ChoiseTravel';

export const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="ChoiseTravel" component={ChoiseTravel} />
      <HomeStack.Screen name="Explore" component={Explore} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen