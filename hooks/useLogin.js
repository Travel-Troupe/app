import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import jwtDecode from 'jwt-decode'
import { useContext, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { LOGIN } from '../store/actions/AuthActions';
import AuthContext from '../store/contexts/AuthContext';


const auth0ClientId = "edxlUZhh5G66hTFRj7qUEdIxdFgWQCuO";
const authorizationEndpoint = "https://dev-9eat6w5u.us.auth0.com/authorize";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = makeRedirectUri({ useProxy });


export default function useLogin() {
  const [user, setUser] = useState(null);
  const { state, dispatch } = useContext(AuthContext);

  const [request, result, promptAsync] = useAuthRequest({
    redirectUri,
    clientId: auth0ClientId,
    responseType: 'id_token', // id_token return jwt token
    scopes: ['openid', 'profile'],
    extraParams: {
      nonce: 'nonce',
    },
  }, { authorizationEndpoint })

  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  console.log(`Redirect URL: ${redirectUri}`);

  useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          'Authentication error',
          result.params.error_description || 'something went wrong'
        );
        return;
      }
      if (result.type === 'success') {
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);
        setUser(decoded);
        dispatch({ type: LOGIN, payload: decoded });
      }
    }
  }, [result, dispatch]);

  const promptLogin = () => promptAsync({ useProxy });

  return { promptLogin, user, request }
}