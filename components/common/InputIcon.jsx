import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView, 
  Image, 
  TextInput
} from 'react-native';

export function InputIcon(props) {
    return (
          <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              placeholder="Choisissez la date idéale"
              underlineColorAndroid="transparent"
              showSoftInputOnFocus={false}
              value={props.value}
            />
            <Image
              source={require('../../assets/icons/calendar.png')}
              style={styles.imageStyle}
            />
          </View>
    );
}

const styles = StyleSheet.create({
  sectionStyle: {
    marginTop:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(246, 246, 246, 0.9)',
    borderRadius: 6,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 5,
    paddingVertical: 13,
    width: '100%',
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});