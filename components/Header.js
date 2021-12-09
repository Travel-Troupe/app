
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";



export default function Header(props) {
  return (
    <View style={styles.header}>
      <Image
        style={styles.profile}
        source={require('../assets/profil.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    zIndex: 2,
    position: 'absolute',
    top: 30,
    right: 30
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 100,
  }
});