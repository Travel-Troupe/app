import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../tabs/Home';
import Explore from '../tabs/Explore';
import DateListResult from '../stacks/DateListResult'
import TravelDetails from '../stacks/TravelDetails'
import ChooseTroupe from '../stacks/ChooseTroupe'
import DateRecap from '../stacks/DateRecap'

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name='Home'
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TravelDetails"
          component={TravelDetails}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ChooseTroupe"
          component={ChooseTroupe}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DateListResult"
          component={DateListResult}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DateRecap"
          component={DateRecap}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeNavigation
