import React from "react";
import { Text, View, StyleSheet, ImageBackground, FlatList} from "react-native";
import Header from "../Header";
import { fakeDates } from '../../utils/fakeData'
import NameTag from '../common/NameTag';
import { FONT } from "../../constants/theme";
import UserProfilListElement from "../common/UserProfilListElement";


const DateRecap = ({navigation}) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode="cover"
      source={require('../../assets/cover-3.jpg')}
    >
      <View style={styles.container}>
            <Header title="< Résultat" />
            <View style={styles.content}>
                <FlatList
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  numColumns={fakeDates.length}
                  data={fakeDates.map((e) => ({ key: e.periodID, ...e }))}
                  renderItem={({item}) => <UserProfilListElement img={item.image} key={item.key} />}
                  keyExtractor={(item) => item.periodID}
                />
            </View>
            <NameTag text={fakeDates[0].period}/>
      </View>
    </ImageBackground>
  )
}

export default DateRecap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    padding: 20,
  },
  content: {
    flexDirection: "row"
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
});