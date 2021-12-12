import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styled from "styled-components/native";
import group from '../../assets/opt1.png'
import solo from '../../assets/opt2.png'
import RoundButton from "../common/RoundButton";
import Title from "../common/Title";


const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
`

export default function ChooseTravel({navigation}) {
  return (
    <StyledView>
      <Title center>Choisir un mode de voyage</Title>
      <View style={styles.content}>
        <View style={styles.box}>
          <RoundButton img={group} onPress={() => navigation.navigate('ChooseTeam')} text={"Groupe"}/>
          <View style={styles.border}></View>
          <RoundButton img={solo} onPress={() => navigation.navigate('ChooseTeam')} text={"Solo"} />
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