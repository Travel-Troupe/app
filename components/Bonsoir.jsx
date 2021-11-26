import React, { useContext } from 'react'
import { Button, View } from 'react-native'
import useLogin from '../hooks/useLogin'
import AuthContext from '../store/contexts/AuthContext'

const Bonsoir = () => {
  const { promptLogin } = useLogin()
  const { state } = useContext(AuthContext)
  console.log(state)
  return (
    <View>
      <Button title="Bonsoir" color="#841584" onPress={promptLogin} />
    </View>
  )
}

export default Bonsoir
