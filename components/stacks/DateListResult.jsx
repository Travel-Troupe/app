import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ImageBackground, TouchableHighlight, FlatList, Modal, Pressable } from "react-native";
import Header from "../Header";
import { COLORS, FONT } from "../../constants/theme";
import { fakeDates } from '../../utils/fakeData'
import DatesListElement from '../common/DatesListElements';

const DateListResult = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const addVote = (periodID) => {
    setModalVisible(true)
  }

  const SubmitVote = () => {
    setModalVisible(false)
    navigation.navigate('DateRecap')
  }
  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode="cover"
      source={require('../../assets/cover-3.jpg')}
    >
      <View style={styles.container}>
            <Header title="< Résultat" />
            <View style={styles.content}>
            <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>
                        Voulez-vous valider cette date ?
                      Ce choix sera définitif pour ce voyage
                      </Text>
                      <View style={{flexDirection: "row"}}>
                        <Pressable
                          style={styles.buttonYes}
                          onPress={SubmitVote}
                        >
                          <Text style={styles.textStyle}>Oui</Text>
                        </Pressable>
                        <Pressable
                          style={styles.buttonNo}
                          onPress={() => setModalVisible(!modalVisible)}
                        >
                          <Text style={{ color: "#747C92",fontWeight: "bold"}}>Non</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <View style={styles.mTop}>
                <FlatList
                  data={fakeDates.map((e) => ({ key: e.periodID, ...e }))}
                  renderItem={({item, index}) => <DatesListElement addVote={addVote} periodID={item.periodID} action={`${index+1}e`} period={item.period} img={item.image} key={item.key} voted={index == 0} first={index == 0}/>}
                  keyExtractor={(item) => item.periodID}
                />
              </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default DateListResult

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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 6,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonYes: {
    backgroundColor: "#79BFA4",
    borderRadius: 6,
    padding: 10,
    marginRight: 25,
  },
  buttonNo: {
    borderWidth: 2,
    borderColor: "#747C92",
    padding: 10,
    borderRadius: 6,
    marginLeft: 25,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});