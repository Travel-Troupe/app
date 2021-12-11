import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const StyledImage = styled.Image`
  width: 80px;
  height: 80px;
`

const StyledText = styled.Text`
  margin: 18px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`

const RoundButton = ({ img, text = '', ...props }) => {
  return (
    <TouchableWithoutFeedback { ...props }>
      <StyledView>
        <StyledImage source={img} />
        <StyledText>{text}</StyledText>
      </StyledView>
    </TouchableWithoutFeedback>
  )
}

export default RoundButton