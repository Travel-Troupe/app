import React from 'react'
import { View } from "react-native";
import styled from "styled-components/native";

const StyledTitle = styled.Text`
  color: #fff;
  text-align: ${({center}) => center ? 'center' : 'left'};
  font-weight: bold;
  font-size: 18px;
`

export default function Title(props) {
  return (
    <View>
      <StyledTitle {...props} />
    </View>
  )
}