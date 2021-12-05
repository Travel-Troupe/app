import React from 'react';
import { StyleSheet, Text, Image, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./components/tabs/Home";
import Team from "./components/tabs/Team";
import ChoiseTravel from "./components/stacks/ChoiseTravel";
import ChoiseTeam from "./components/stacks/ChoiseTeam";
import Explore from "./components/tabs/Explore";

let homeTabIcon = require('./assets/icons/home.png')
let travelTabIcon = require('./assets/icons/globe.png')
let mapTabIcon = require('./assets/icons/map.png')
let teamTabIcon = require('./assets/icons/team.png')

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MyPropsStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="ChoiseTravel" component={ChoiseTravel} />
      <HomeStack.Screen name="Explore" component={Explore} />
    </HomeStack.Navigator>
  );
}

function MyPropsScreen() {
  return (
    <MyPropsStack.Navigator
    screenOptions ={{
      headerShown: false
    }}>
      <MyPropsStack.Screen name="ChoiseTeam" component={ChoiseTeam} />
      <MyPropsStack.Screen name="ChoiseTravel" component={ChoiseTravel} />
    </MyPropsStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Accueil") {
              iconName = homeTabIcon;
            } else if (route.name === "Explorer") {
              iconName = mapTabIcon;
            }
            else if (route.name === "Mes voyages") {
              iconName = travelTabIcon;
            }
            else if (route.name === "Mes troupes") {
              iconName = teamTabIcon;
            }

            return <Image source={iconName} style={styles.icon} />;
          }
        })}
      >
        <Tab.Screen name="Accueil" component={HomeStackScreen} />
        <Tab.Screen name="Explorer" component={Explore} />
        <Tab.Screen name="Mes voyages" component={ChoiseTravel} />
        <Tab.Screen name="Mes troupes" component={Team} />
      </Tab.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Image
    //   style={styles.imgCover}
    //   source={require('./assets/cover.jpg')}
    // />
    // <Image
    //   style={styles.logo}
    //   source={require('./assets/logo-tt.png')}
    // />
    // <View style={styles.content}>
    //   <Text
    //       style={styles.button}>
    //         S'inscrire
    //   </Text>
    //   <Text
    //       style={styles.text}>
    //         Déja un compte ? 
    //   </Text>
    // </View>

    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  imgCover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    width: 200,
    resizeMode: 'contain',
  },
  content: {
    position: 'absolute',
    bottom: 100,
  },
  button: {
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
    color: 'white',
    fontWeight: "600",
    textTransform: 'uppercase',
    backgroundColor: '#79BFA4',
  },
  text: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#fff',
  }
});
