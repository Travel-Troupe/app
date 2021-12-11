import React, { useContext } from 'react'
import { FlatList, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { ADD_TRAVEL } from '../../store/actions/UserActions'
import UserContext from '../../store/contexts/UserContext'
import { fakeUsers } from '../../utils/fakeData'
import Button from '../Button'
import Title from '../common/Title'
import UserListElement from '../common/UserListElement'

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

const CreateTroupe = ({navigation}) => {
  const { dispatch } = useContext(UserContext)
  const onValidate = () => {
    dispatch({ type: ADD_TRAVEL,  payload: { name: 'bonsoir' } })
  }
  return (
    <StyledView>
      <Title>Créer votre troupe</Title>
      <StyledTextInput placeholder="Rechercher un utilisateur" />
      <Button onPress={() => onValidate()}/>
      <Title style={{ marginTop: 24, marginBottom: 24 }}>Votre troupe</Title>
      <View style={{flex: 1}}>
        <FlatList
          data={fakeUsers.map((e) => ({ key: e.name, ...e }))}
          renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={(item) => item.key}
        />
      </View>
      <Button onPress={() => onValidate()}/>
    </StyledView>
  )
}

export default CreateTroupe
