import React, { useContext, useEffect } from 'react'

import Login from './navigations/Login';
import AuthContext from '../store/contexts/AuthContext';
import Main from './navigations/Main';
import TravelTunnel from './navigations/TravelTunnel';
import useUser from '../hooks/useUser';
import { getItem } from '../utils/AppStorage';
import { LOGIN } from '../store/actions/AuthActions';

const AppNavigation = () => {
  const { state, dispatch } = useContext(AuthContext)
  const { user } = useUser()

  useEffect(() => {
    (async () => {
      const user = await getItem('user')
      if (user) {
        dispatch({ type: LOGIN, payload: user })
      }
    })()
  }, [])

  // if travels are empty display onboarding
  // for demo purpose we'll get travels directly from the state
  const travels = user.travels

  const isLogged = !!(state.user)
  const hasTravels = travels.length > 0

  if (isLogged && !hasTravels) {
    return <TravelTunnel />
  }
  return isLogged ? <Main /> : <Login />
}

export default AppNavigation
