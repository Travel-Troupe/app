import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { COLORS } from '../../constants/theme'


const StyledNameTag = styled.View`
  background-color: ${COLORS.green};  
  margin-left: 8px;
  padding: 8px;
  border-radius: 6px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`

const NameTag = ({ color, text, ...props}) => {
  return (
        <StyledNameTag>
          <Text style={{color: "#fff", textAlign: 'center'}}>{text}</Text>
        </StyledNameTag>
  )
}

export default NameTag
