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

const ChooseTroupe = ({navigation}) => {
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
        source={require('../../assets/cover-home.jpg')}
      >
    <Container>
      <Header title={"Liste des troupes"} />
        {
          (hasData) && (
            <FlatList
              data={data.map((e) => ({ key: e.name, ...e }))}
              renderItem={({item}) => (
                <View style={styles.list}>
                  <Text>{item.name}</Text>
                  <View style={styles.date}>
                    <Text>28/07/2022 - 12/08/2022</Text></View>
                </View>
              )}
              keyExtractor={(item) => item.key}
            />
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
    padding: 15,
    width: '100%',
    backgroundColor: COLORS.white,
    color: COLORS.grey,
    borderRadius: 6
  },
  date: {
    backgroundColor: COLORS.grey
  }
})

export default ChooseTroupe
