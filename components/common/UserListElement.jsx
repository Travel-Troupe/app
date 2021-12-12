import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'

const StyledContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
`

const StyledImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
`

const StyledInfo = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`

const StyledNameTag = styled.View`
  background-color: ${COLORS.grey};
  margin-left: 8px;
  padding: 8px;
  border-radius: 6px;
`

const UserListElement = ({ name, img, ...props}) => {
  return (
    <StyledContainer {...props}>
      <StyledInfo>
        <StyledImage source={img} />
        <StyledNameTag>
          <Text style={{color: "#fff"}}>{name}</Text>
        </StyledNameTag>
      </StyledInfo>
    </StyledContainer>
  )
}

export default UserListElement
