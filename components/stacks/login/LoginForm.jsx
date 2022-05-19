import jwtDecode from 'jwt-decode';
import React from 'react'
import { Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { login } from '../../../services/Api';
import Button from "../../Button";
import { setItem } from '../../../utils/AppStorage';
import AuthContext from '../../../store/contexts/AuthContext'
import { LOGIN } from '../../../store/actions/AuthActions';
import cover from '../../../assets/cover-login.jpg';
import logo from '../../../assets/logo-tt.png'

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
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imgCover}
        source={cover}
      />
      <Image
        style={styles.logo}
        source={logo}
      />
      <Text style={styles.text}>Nom d'utilisateur</Text>
      <StyledTextInput 
        style={styles.input}
        placeholder="username"
        autoCapitalize="none"
        onChangeText={setUsername}
        />
      <Text style={styles.text}>Mot de passe</Text>
      <StyledTextInput 
        style={styles.input}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button style={styles.button} primary children="Connexion" text="login" onPress={logIn}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  imgCover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: 50,
    width: 120,
    resizeMode: 'contain',
  },
  content: {
  },
  button: {
    marginTop: 30
  },
  input: {
    height: 50,
    width: '70%',
    borderRadius: 6,
  },
  text: {
    marginTop: 20,
    fontSize: 12,
    color: '#fff',
  }
})


export default LoginForm
