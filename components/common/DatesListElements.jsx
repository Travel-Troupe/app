import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'

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

const StyledSubInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  margin-left: 40px;
`
const StyledIcon = styled.Image`
  height: 20px;
  width: 20px;
  margin-left: 5px;
`

const StyledInfo = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`

const StyledNameTag = styled.View`
  background-color: ${props => props.isGreen ? "#79BFA4" : "#747C92"};
  margin-left: 20px;
  padding: 8px;
  border-radius: 6px;
`


const StyledText = styled.Text`
  color:  ${props => props.voted ? "#FF8C42" : "white"};
`

const StyledPeriodText = styled.Text`
  color:  ${props => props.voted ? "#FF8C42" : "white"};
`


const DatesListElement = ({ periodID, period, action, img, voted, first = false, ...props}) => {
  const onAddVote = (periodID) => {
    props.addVote(periodID)
  }

  return (
    <StyledContainer {...props}>
      <StyledInfo>
        <StyledImage source={img} />
        <StyledNameTag isGreen={first}>
          <Text style={{color: "#fff"}}>{period}</Text>
        </StyledNameTag>
            <TouchableHighlight onPress={() => onAddVote(periodID)}>
            <StyledSubInfo>
                <StyledText voted={voted}>{action}</StyledText>
                <StyledIcon source={voted == true ? require('../../assets/icons/star-voted.png') : require('../../assets/icons/stars.png')} />
            </StyledSubInfo>
            </TouchableHighlight>
      </StyledInfo>
    </StyledContainer>
  )
}

export default DatesListElement