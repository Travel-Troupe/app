import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import cover from '../../../assets/cover.jpg'
import logo from '../../../assets/logo-tt.png'

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgCover}
        source={cover}
      />
      <Image
        style={styles.logo}
        source={logo}
      />
      <View style={styles.content}>
        <Text style={styles.button} onPress={() => { navigation.navigate('LoginForm') }} >Se connecter</Text>
        <Text style={styles.text} onPress={() => {}}>Pas de compte ?</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
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
})



export default Main