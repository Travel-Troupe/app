import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'

const StyledRow = styled.View`
  flex-direction: row;
`

const StyledRoundImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  margin-top: 40px;
  margin-bottom: 40px;
`

const UserProfilListElement = ({ img, ...props}) => {
  return (
        <StyledRoundImage source={img} />
  )
}

export default UserProfilListElement
