import React, { createContext, useReducer } from "react";
import UserReducer from "../reducers/UserReducer";

const getStateDefaultValue =  () => ({
  travels: []
})

const UserContext = createContext({ state: { ...getStateDefaultValue() }, dispatch: () => {} })

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, { ...getStateDefaultValue(), dispatch: () => {} })
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext