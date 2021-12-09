import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import DatePicker from 'react-native-date-ranges';

import moment from "moment";
import Header from "../Header";
import Button from "../Button";
import { COLORS, FONT } from "../../constants/theme";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        style={styles.imgCover}
        source={require('../../assets/cover-3.jpg')}
      />
      <Text style={styles.title}>Sélectionner une date</Text>
      <View style={styles.content}></View>
      <Text style={styles.text}>Sélectionner la période où vous serez disponible, les membres de votre troupe la verront aussi :</Text>
      <DatePicker
        style={{ width: 300, height: 45, backgroundColor: COLORS.white }}
        customStyles={{
          placeholderText: { fontSize: 12, color: COLORS.black }, // placeHolder style
          headerStyle: {},         // title container style
          headerMarkTitle: {}, // title mark style 
          headerDateTitle: {}, // title Date style
          contentInput: {}, //content text container style
          contentText: {}, //after selected text Style
        }} // optional 
        centerAlign // optional text will align center or not
        allowFontScaling={false} // optional
        placeholder={'Apr 27, 2018 → Jul 10, 2018'}
        mode={'range'}
      />

      <Button />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'white',
  },
  imgCover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  title: {
    marginTop: 40,
    marginLeft: 30,
    fontSize: FONT.h1,
    color: "#fff"
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