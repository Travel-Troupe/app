import React from 'react'
import { ImageBackground } from "react-native"
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import styled from "styled-components/native"

import ChooseTravel from '../stacks/ChooseTravel'
import ChooseTeam from '../stacks/ChooseTeam'
import backgroundImage from '../../assets/cover-2.jpg'
import ChooseName from '../stacks/ChooseName'
import CreateTroupe from '../stacks/CreateTroupe'
import ChooseTroupe from '../stacks/ChooseTroupe'
import DateListResult from '../stacks/DateListResult'
import DateRecap from '../stacks/DateRecap'

const Container = styled.SafeAreaView`
  flex: 1;
`

const options = {
  headerShown: false,
}

const Stack = createNativeStackNavigator();

const navigationTheme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
  },
};

const Wrapper = ({children}) => {
  return <ImageBackground 
    style={{ flex: 1 }}
    resizeMode="cover"
    source={backgroundImage}
  >{children}</ImageBackground>
}


const stacks = [
  {
    name: 'ChooseTravel',
    children: ChooseTravel,
  },
  {
    name: 'ChooseTeam',
    children: ChooseTeam,
  },
  {
    name: 'ChooseName',
    children: ChooseName, 
  },
  {
    name: 'CreateTroupe',
    children: CreateTroupe, 
  },
  {
    name: 'ChooseTroupe',
    children: ChooseTroupe,
  },
  {
    name: 'DatesList',
    children: DateListResult,
  },
  {
    name: 'DateRecap',
    children: DateRecap,
  }
]

const TravelTunnel = () => (
  <ImageBackground 
    style={{ flex: 1 }}
    resizeMode="cover"
    source={backgroundImage}
  >
    <Container>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator cardStyle={{ backgroundColor: 'transparent' }}>
          {stacks.map(({children: Component, ...e}) => (
            <Stack.Screen
              key={e.name}
              options={options}
              children={(props) => <Wrapper><Component {...props} /></Wrapper>}
              {...e}
            /> 
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  </ImageBackground>
)

export default TravelTunnel