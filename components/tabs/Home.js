import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import Header from "../Header";
import Card from "../Card";
import { COLORS, FONT } from "../../constants/theme";
import Button from "../Button";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Header title={"Mes voyages"} />
      <Image
        style={styles.imgCover}
        source={require('../../assets/cover-home.jpg')}
      />
      <View style={styles.content}>
        <Card />
        <Card />
      </View>

      <Button children="Nouveau voyage" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
    color: 'white',
  },
  content: {
    marginTop: 100
  },
  imgCover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  text: {
    color: "#fff",
    marginLeft: 30
  },
  button: {
    padding: 10,
    fontSize: FONT.h2,
    fontWeight: "500",
    color: "#fff",
    textTransform: 'uppercase',
    alignSelf: 'center',
    backgroundColor: COLORS.grey
  },
  content: {
    marginTop: 50,
  }
});