import React from 'react'
import { logout } from '../../services/User'
import AuthContext from '../../store/contexts/AuthContext'
import Button from '../Button'

const UserInfo = ({ navigation }) => {

  const { dispatch } = React.useContext(AuthContext)

  const onLogOut = React.useCallback(() => {
    logout({dispatch})
  }, [dispatch])

  return (
    <Button onPress={onLogOut}>
      Se déconnecter
    </Button>
  )
}

export default UserInfo