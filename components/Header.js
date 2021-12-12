
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS, FONT } from "../constants/theme";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
      <Image
        style={styles.profile}
        source={require('../assets/profil.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    width: "100%",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    marginLeft: 30,
    position: 'absolute',
    left: 0,
    fontSize: FONT.h1,
    fontWeight: "500",
    color: "#fff"
  },
  profile: {
    position: 'absolute',
    marginRight: 20,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 100,
  }
});