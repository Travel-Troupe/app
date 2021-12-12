import React, { useContext } from 'react'
import { useState } from 'react'
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
  const [selectedUsers, setSelectedUsers] = useState([])
  const onValidate = () => {
    dispatch({ type: ADD_TRAVEL,  payload: { name: 'bonsoir' } })
  }
  return (
    <StyledView>
      <Title>Créer votre troupe</Title>
      <StyledTextInput placeholder="Rechercher un utilisateur" />
      <Button disabled onPress={() => onValidate()}>Ajouter</Button>
        <Title style={{ marginTop: 24, marginBottom: 24 }}>Votre troupe</Title>
        <FlatList
          data={fakeUsers.map((e) => ({ key: e.name, ...e }))}
          renderItem={({item}) => <UserListElement name={item.name} img={item.image} key={item.key} />}
          keyExtractor={(item) => item.key}
        />
      <Button onPress={() => onValidate()} primary>Valider</Button>
    </StyledView>
  )
}

export default CreateTroupe
