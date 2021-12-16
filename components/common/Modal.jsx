import React, { useState } from 'react'
import { TouchableWithoutFeedback, View, Modal } from 'react-native'
import styled from 'styled-components/native'


export function Modal({ text, firstAction, SecondAction, ...props}) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
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
            <Text style={styles.modalText}>{text}</Text>
            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.textStyle}>{firstAction}</Text>
            </Pressable>
            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.textStyle}>{SecondAction}</Text>
            </Pressable>
        </View>
        </View>
    </Modal>
    )
}


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
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
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
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