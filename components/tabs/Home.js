import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, FlatList, ImageBackground } from "react-native";

import Header from "../Header";
import Card from "../Card";
import { COLORS, FONT } from "../../constants/theme";
import Button from "../Button";
import { fakeTravels } from "../../utils/fakeData";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: 20px;
`


export default function Home({navigation}) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode="cover"
      source={require('../../assets/cover-home.jpg')}
    >
      <Container>
        <Header title={"Mes voyages"} />
        <FlatList
          data={fakeTravels.map((e) => ({ key: e.name, ...e }))}
          renderItem={({item}) => (
            <Card onPress={() => {navigation.navigate("ChooseDate")}} {...item} key={item.key} />
          )}
          keyExtractor={(item) => item.key}
        />
        <Button children="Nouveau voyage" />
      </Container>
    </ImageBackground>
  )
}
