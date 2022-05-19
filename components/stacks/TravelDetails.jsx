import React from 'react'
import { Text, View, StyleSheet, Image, FlatList, ImageBackground } from "react-native";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import styled from 'styled-components/native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from '../../constants/theme';
import Button from '../Button'
import Title from '../common/Title'
import Header from "../Header";
import img from '../../assets/cover.jpg';
import UserProfilListElement from "../common/UserProfilListElement";
import Badge from "../../components/Badge";
import profil from "../../assets/profil.jpg"

const Container = styled.View`
  flex: 1;
  padding: 20px;
`

const TravelDetails = ({navigation}) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode="cover"
      source={require('../../assets/cover-home.jpg')}
    >
      <Container>
        <Header title={"Los angeles"} />
   
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <UserProfilListElement img={profil} />
          <UserProfilListElement img={profil} />
          <UserProfilListElement img={profil} />
        </View>
        <Image
              style={styles.img}
              source={img }
            />
      </View>

      <TouchableOpacity style={styles.group}>
        <View style={styles.cardSm}>
          <Image
          style={styles.icon}
          source={require('../../assets/icons/list.png')}
          />
          <Text>Tâches</Text>  
        </View>
        <View style={styles.cardSm}>
          <Image
          style={styles.icon}
          source={require('../../assets/icons/map-2.png')}
          />
          <Text>Etapes clés</Text>  
        </View>
        <View style={styles.cardSm}>
          <Image
          style={styles.icon}
          source={require('../../assets/icons/file.png')}
          />
          <Text>Documents</Text>  
        </View>
        <View style={styles.cardSm}>
          <Image
          style={styles.icon}
          source={require('../../assets/icons/pay.png')}
          />
          <Text>Budget</Text>  
        </View>
      </TouchableOpacity>
      </Container>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    width: '100%',
    height: 180,
    backgroundColor: COLORS.white,
    borderRadius: 6
  },
  cardContent: {
    zIndex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  group: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  cardSm: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '47%',
    height: 155,
    backgroundColor: COLORS.white,
    color: COLORS.black,
    borderRadius: 6
  },
  img: {
    position: 'absolute',
    height: "100%",
    width: '100%',
    borderRadius: 6
  },
  icon: {
    width: 30,
    resizeMode: 'contain',
  }
})

export default TravelDetails
