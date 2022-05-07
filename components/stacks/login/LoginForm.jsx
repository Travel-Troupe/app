import jwtDecode from 'jwt-decode';
import React from 'react'
import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { login } from '../../../services/Api';
import { setItem } from '../../../utils/AppStorage';
import RoundButton from '../../common/RoundButton';
import AuthContext from '../../../store/contexts/AuthContext'
import { LOGIN } from '../../../store/actions/AuthActions';

const StyledTextInput = styled.TextInput`
  background-color: #f6f6f6;
  height: 80px;
  padding: 12px;
  margin: 16px;
`

const LoginForm = () => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { dispatch } = React.useContext(AuthContext);

  const logIn = async () => {
    if (username && password) {
      const res = await login({ username, password })
      if (res.token) {
        const user = jwtDecode(res.token);
        await setItem('user', user)
        await setItem('token', res.token)
        dispatch({ type: LOGIN, payload: user })
      }
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>LoginForm</Text>
      <StyledTextInput 
        placeholder="username"
        autoCapitalize="none"
        onChangeText={setUsername}
        />
      <StyledTextInput 
        placeholder="password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <RoundButton text="login" onPress={logIn}/>
    </SafeAreaView>
  )
}

export default LoginForm