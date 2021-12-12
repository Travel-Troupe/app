
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS, FONT } from "../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

const StyledButtonContainer = styled.View`
  background-color: ${({primary}) => primary ? `${COLORS.green}` : `${COLORS.grey}`};
  opacity: ${({disabled}) => disabled ? '0.5' : '1'};
  align-self: center;
  border-radius: 6px;
  padding: 16px 32px;
`

export default function Button ({children = 'Suivant', disabled, onPress, ...props}) {
  const callback = disabled ? () => {} : onPress
  return (
    <TouchableOpacity onPress={callback} >
      <StyledButtonContainer disabled={disabled} {...props}>
        <Text style={styles.button}>{children}</Text>
      </StyledButtonContainer>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: FONT.h2,
    fontWeight: "500",
    color: "#fff",
  }
});