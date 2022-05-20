import React, { useContext } from 'react'
import { useState } from 'react'
import { FlatList, Text, View, ImageBackground, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme';
import styled from 'styled-components/native'
import Header from "../Header";
import { fakeUsers } from '../../utils/fakeData'
import Button from '../Button'
import Title from '../common/Title'
import useFetch from "../../hooks/useFetch";

const StyledView = styled.View`
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
`

const StyledTextInput = styled.TextInput`
  height: 50px;
  margin-top: 16px
  margin-bottom: 16px
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 6px;
  background-color: #F6F6F6;
`

const ChooseTeam = ({navigation}) => {
  const { data, error, loading } = useFetch('/team/all')
  const hasData = !!(!loading && data && data.length)
  const hasNoData = !!(!loading && data && !data.length)

  const Container = styled.View`
  flex: 1;
  padding: 20px;
`
  return (
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={require('../../assets/choose-travel.jpg')}
      >
    <Container>
      <Header title={"Liste des troupes"} />
        {
          (hasData) && (
            <>
            <Text style={{color: "#fff"}}>Sélectionnez votre troupe pour ce voyage :</Text>
            <FlatList
              data={data.map((e) => ({ key: e.name, ...e }))}
              renderItem={({item}) => (
                <View style={styles.list}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.date}>
                    <Text style={styles.dateText}>28/07/2022 - 12/08/2022</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.key}
            />
            <Button onPress={() => {navigation.navigate("ChooseTravelName")}} primary children="Suivant" /> 
            </>
          )
        }
      </Container>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
    backgroundColor: COLORS.white,
    color: COLORS.grey,
    borderRadius: 6
  },
  date: {
    padding: 15,
    backgroundColor: COLORS.grey,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6
  },
  dateText: {
    color: COLORS.white,
    fontWeight: "600"
  },
  name: {
    padding: 15,
    fontWeight: "600",
    color: COLORS.grey,
  }
})

export default ChooseTeam
