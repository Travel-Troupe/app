import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const StyledContainer = styled.View`
  /* flex: 1;
  justify-content: space-between; */
  background-color: red;
`

const StyledImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
`

const StyledInfo = styled.View`
  flex: 1;
  justify-content: flex-start;
`

const UserListElement = ({ name, img, ...props}) => {
  return (
        <Text style={{color: "#fff"}}>{name}</Text>
    // <StyledContainer {...props}>
    //   <StyledInfo>
    //     <StyledImage source={img} />
    //     <Text style={{color: "#fff"}}>{name}</Text>
    //   </StyledInfo>
    // </StyledContainer>
  )
}

export default UserListElement
