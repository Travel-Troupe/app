import React, { createContext, useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";


const getStateDefaultValue =  () => ({
  user: null,
})

const AuthContext = createContext({ state: { ...getStateDefaultValue() }, dispatch: () => {} })

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, { ...getStateDefaultValue(), dispatch: () => {} })
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext