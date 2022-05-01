import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, FlatList, ImageBackground } from "react-native";

import Header from "../Header";
import Card from "../Card";
import Button from "../Button";
import styled from "styled-components/native";
import useFetch from "../../hooks/useFetch";

const Container = styled.View`
  flex: 1;
  padding: 20px;
`

export default function Home({navigation}) {
  const { data, error, loading } = useFetch('/travel/all')
  const hasData = !!(!loading && data && data.length)
  const hasNoData = !!(!loading && data && !data.length)

  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode="cover"
      source={require('../../assets/cover-home.jpg')}
    >
      <Container>
        <Header title={"Mes voyages"} />
        {
          (hasData) && (
            <FlatList
              data={data.map((e) => ({ key: e.name, ...e }))}
              renderItem={({item}) => (
                <Card
                  onPress={() => {navigation.navigate("ChooseDate")}}
                  name={item.name}
                  key={item._id}
                />
              )}
              keyExtractor={(item) => item.key}
            />
          )
        }
        { (hasNoData) && <Text>Aucun voyage à afficher</Text> }
        { (error) && <Text>Une erreur est survenue</Text> }
        {/* !TODO add a loader with a {loading && <Loader />} */}
        <Button children="Nouveau voyage" />
      </Container>
    </ImageBackground>
  )
}
