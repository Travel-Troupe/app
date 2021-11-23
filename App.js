import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image,Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      style={styles.imgCover}
      source={require('./assets/cover.jpg')}
    />
    <Image
      style={styles.logo}
      source={require('./assets/logo-tt.png')}
    />
    <View style={styles.content}>
      <Text
          style={styles.button}>
            S'inscrire
      </Text>
      <Text
          style={styles.text}>
            Déja un compte ? 
      </Text>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
    position:'absolute',
    bottom: 100,
  },
  button: {
    paddingTop: 15,
    paddingRight:30,
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
