import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";



export default function ChoiseTravel(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgCover}
        source={require('../../assets/cover-2.jpg')}
      />
      <Text
        style={styles.text}>
        Choisir un mode de voyage
      </Text>
      <View style={styles.content}>
        <Image
          style={styles.button}
          source={require('../../assets/opt1.png')}
        />
        <View style={styles.border}></View>
        <Image
          style={styles.button}
          source={require('../../assets/opt2.png')}
        />
      </View>
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
  button: {
    width: 120,
    height: 120
  },
  border: {
    height: 2,
    width: 150,
    backgroundColor: 'white'
  },
  content: {
    height: '65%',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
  },
  text: {
    position: 'absolute',
    top: 50,
    color: '#fff',
  }
});