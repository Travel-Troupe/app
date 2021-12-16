import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ImageBackground, TouchableHighlight, FlatList } from "react-native";
import {InputIcon} from '../common/InputIcon'
import {Calendar} from '../common/Calendar'
import Header from "../Header";
import Button from "../Button";
import { COLORS, FONT } from "../../constants/theme";
import { fakeDates } from '../../utils/fakeData'
import DatesListElement from '../common/DatesListElements';
import image from '../../assets/profil.jpg'


export default function Explore({navigation}) {
  const [displayCalendar, setDisplayCalendar] = useState(false)
  const [dateRange, setdateRange] = useState('')
  const [hasVoted, setHasVoted] = useState(false)
  const [chosenPeriod, setPeriodChosen] = useState(0)
  const [displayDatesList, setDisplayDatesList] = useState(false)
  
  const onClickCalender = () => {
    setDisplayCalendar(true)
  }
  
  const addDates = () => {
    fakeDates.push({
      periodID: 4,
      stars: 0,
      period: dateRange,
      image
    })
    setDisplayCalendar(false)
    setDisplayDatesList(true)
  }
  
  const addVote = (periodID) => {
    if (hasVoted) {
      alert("Vous avez déjà voté");
      return
    }
    setPeriodChosen(periodID)
    setHasVoted(true)
  }
  
  return (
    <ImageBackground
    style={{ flex: 1 }}
    resizeMode="cover"
    source={require('../../assets/cover-3.jpg')}
    >
    <View style={styles.container}>
    <Header title={"Sélectionner une date"} />
    <View style={styles.content}>
    <Text style={{color: "#fff", marginTop: 50}}>
    Sélectionner la période où vous serez disponible, les membres de votre troupe la verront aussi :
    </Text>
    <TouchableHighlight onPress={onClickCalender} underlayColor="white">
    <InputIcon value={dateRange} /> 
    </TouchableHighlight>
    {
      displayCalendar && 
      <View style={styles.mTop}>
      <Calendar dateRange={dateRange} setdateRange={setdateRange}/>
      </View>
    }
    {
      displayDatesList &&
      <View style={styles.mTop}>
      <FlatList
      data={fakeDates.map((e) => ({ key: e.periodID, ...e }))}
      renderItem={({item}) => <DatesListElement addVote={addVote} periodID={item.periodID} action={chosenPeriod === item.periodID ? 'fait' : 'voter'} voted={chosenPeriod === item.periodID ? true : false} period={item.period} img={item.image} key={item.key}/>}
      keyExtractor={(item) => item.periodID}
      />
      </View>
    }
    </View>
    {
      displayCalendar && 
      <Button style={styles.mTop} onPress={addDates}/>}
      {
        displayDatesList &&
        <Button style={styles.mTop} onPress={() => {navigation.navigate("DateListResult")}}/>}        
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