
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS, FONT } from "../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Button (props) {
  return (
  <TouchableOpacity {...props}>
    <Text style={styles.button}>Suivant</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    fontSize: FONT.h2,
    fontWeight: "500",
    color: "#fff",
    textTransform: 'uppercase',
    alignSelf: 'center',
    backgroundColor: COLORS.grey
  }
});