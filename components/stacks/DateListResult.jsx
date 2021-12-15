import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ImageBackground, TouchableHighlight, FlatList } from "react-native";
import {InputIcon} from '../common/InputIcon'
import {Calendar} from '../common/Calendar'
import Header from "../Header";
import Button from "../Button";
import { COLORS, FONT } from "../../constants/theme";
import { fakeDates } from '../../utils/fakeData'
import DatesListElement from '../common/DatesListElements';


export default function Explore(props) {

  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode="cover"
      source={require('../../assets/cover-3.jpg')}
    >
      <View style={styles.container}>
        <Header title={"< Résultat"} />
        <View style={styles.content}>
            <View style={styles.mTop}>
              <FlatList
                data={fakeDates.map((e) => ({ key: e.userID, ...e }))}
                renderItem={({item}) => <DatesListElement action="" period={item.period} img={item.image} key={item.key} winner={item.winner !== null & item.winner}/>}
                keyExtractor={(item) => item.userID}
              />
            </View>
        </View>
        <Button style={styles.mTop} onPress={addDates}/>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    padding: 20,
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
  mTop: {
    marginTop: 40,
  }
});