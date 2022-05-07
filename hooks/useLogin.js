import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../store/contexts/AuthContext';


export default function useLogin() {
  const [user, setUser] = useState(null);
  const { dispatch } = useContext(AuthContext)

  useEffect(() => {
  }, []);


  return { }
}