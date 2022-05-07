import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginForm from '../stacks/login/LoginForm';
import Main from '../stacks/login/Main'

const Stack = createNativeStackNavigator();

const Login = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Main'
          component={Main}
        />
        <Stack.Screen
          name="LoginForm"
          component={LoginForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Login
