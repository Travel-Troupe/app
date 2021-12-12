import styled from "styled-components/native";

const Title = styled.Text`
  color: #fff;
  text-align: ${({center}) => center ? 'center' : 'left'};
  font-weight: bold;
  font-size: 18px;
`

export default Title