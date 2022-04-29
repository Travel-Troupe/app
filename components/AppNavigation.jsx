import React, { useContext } from 'react'

import Login from './navigations/Login';
import AuthContext from '../store/contexts/AuthContext';
import Main from './navigations/Main';
import TravelTunnel from './navigations/TravelTunnel';
import useUser from '../hooks/useUser';

const AppNavigation = () => {
  const { state } = useContext(AuthContext)
  const { user } = useUser()
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
