import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, FlatList, ImageBackground } from "react-native";

import Header from "../Header";
import Card from "../Card";
import Button from "../Button";
import styled from "styled-components/native";
import { COLORS, FONT } from "../../constants/theme";
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
            <>
              <FlatList
                data={data.map((e) => ({ key: e.name, ...e }))}
                renderItem={({item}) => (
                  <Card
                    onPress={() => {navigation.navigate("TravelDetails")}}
                    name={item.name}
                    key={item._id}
                  />
                )}
                keyExtractor={(item) => item.key}
              />
              <Button onPress={() => {navigation.navigate("ChooseTeam")}} primary children="Nouveau voyage" />
            </>
          )
        }
        { (hasNoData) && <Text style={styles.text}>Nous n’avons trouvé aucun voyage... Commencez une nouvelle aventure dès maintenant !</Text> }
        { (error) && <Text style={styles.text}>Une erreur est survenue</Text> }
        {/* !TODO add a loader with a {loading && <Loader />} */}

        { (hasNoData) && <Button onPress={() => {navigation.navigate("ChooseTeam")}} primary children="Je me lance" /> }
      </Container>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    padding: 30,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    color: COLORS.grey,
    overflow: "hidden"
  },
});