
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS, FONT } from "../constants/theme";
import Title from "./common/Title";

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Title>{title}</Title>
      <Image
        style={styles.profile}
        source={require('../assets/profil.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: FONT.h1,
    fontWeight: "500",
    color: "#fff"
  },
  profile: {
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 50,
  }
});