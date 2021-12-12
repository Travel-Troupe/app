import React from "react";
import Title from "../common/Title";
import styled from 'styled-components/native'
import { StyleSheet, View } from "react-native";
import RoundButton from "../common/RoundButton";

import group from '../../assets/create-troupe.png'
import solo from '../../assets/solo.png'

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
`


export default function ChooseTeam ({navigation}) {
  return (
    <StyledView>
      <Title center>Rejoindre ou creer une troupe</Title>
      <View style={styles.content}>
        <View style={styles.box}>
          <RoundButton img={group} onPress={() => navigation.navigate('ChooseName')} text="Créer une troupe" />
          <View style={styles.border}></View>
          <RoundButton img={solo} onPress={() => navigation.navigate('ChooseName')} text="Rejoindre une troupe"/>
        </View>
      </View>
    </StyledView>
  )
}

const styles = StyleSheet.create({
  border: {
    height: 2,
    backgroundColor: 'white',
    marginTop: 16,
    marginBottom: 16
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  }
});