import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../tabs/Home';
import Explore from '../tabs/Explore';


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
          name="ChooseDate"
          component={Explore}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeNavigation
