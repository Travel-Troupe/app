import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS, FONT } from "../constants/theme";

export default function Badge(props) {
  return (
    <View style={styles.badge}>
      <Image
        style={styles.badgeIcon}
        source={require('../assets/icons/pin.png')}
      />
      <Text style={styles.badgeTitle}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    padding: 2,
    marginRight: 5,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    backgroundColor: 'rgba(255, 140, 66, 0.3)',
    borderRadius: 20,
  },
  badgeTitle: {
    marginTop: 2,
    marginRight: 4,
    fontSize: FONT.textXs,
    color: COLORS.orange,
    fontWeight: "bold"
  },
  badgeIcon: {
    marginRight: 2,
    width: 15,
    height: 15
  }
});