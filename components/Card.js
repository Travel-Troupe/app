
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS, FONT } from "../constants/theme";
import Badge from "../components/Badge";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Card({name, price, description, image, tags, ...props}) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.card}>
        <View style={styles.cardImage}>
          <Image
            style={styles.img}
            source={{ uri: image }}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardPrice}>Budget: {price}</Text>
          <Text style={styles.cardText}>{description}</Text>
          <View style={styles.cardTags}>
            {tags.map((tag, index) => (
              <Badge text={tag} icon={"pin"} key={index}>{tag}</Badge>
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxHeight: 150,
    flexDirection: "row",
    marginTop: 20,
    padding: 8,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    overflow: "hidden"
  },
  cardTags: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
  cardImage: {
    flex: 4,
    padding: 5,
    marginRight: 5
  },
  img: {
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