
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS, FONT } from "../constants/theme";
import Card from "../components/Badge";

export default function Header(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardImage}>
        <Image
          style={styles.img}
          source={require('../assets/cover-home.jpg')}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Road Trip USA 2022 </Text>
        <Text style={styles.cardPrice}>Budget : 22 984$</Text>
        <Text style={styles.cardText}>Voyage de Chicago à New York en passant par Boston</Text>
        <View style={styles.cardTags}>
          <Card text={"Europe"} icon={"pin"} />
          <Card text={"6 pers"} icon={"pin"} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: "10%",
    width: "80%",
    padding: 8,
    height: 130,
    borderRadius: 10,
    backgroundColor: COLORS.white
  },
  cardTags: {
    display: "flex",
    flexDirection: "row",
  },
  cardImage: {
    flex: 4,
    padding: 5,
    marginRight: 5
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  cardContent: {
    flex: 3
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: FONT.textSm
  },
  cardPrice: {
    fontSize: FONT.textXs,
    color: COLORS.grey,
    marginTop: 5,
    marginBottom: 5
  },
  cardText: {
    fontSize: FONT.textXs
  }

});