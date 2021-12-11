import React from 'react'
import styled from 'styled-components/native'
import Button from '../Button'
import Title from '../common/Title'

const StyledView = styled.View`
  padding-top: 24px;
`

const StyledTextInput = styled.TextInput`
  height: 50px;
  margin: 16px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 6px;
  background-color: #F6F6F6;
`

const ChooseName = ({navigation}) => {
  return (
    <StyledView>
      <Title center>Choisissez un nom</Title>
      <StyledTextInput placeholder="Ex: Voyage Malaisie 2023" />
      <Button onPress={() => navigation.navigate('CreateTroupe')}/>
    </StyledView>
  )
}

export default ChooseName
