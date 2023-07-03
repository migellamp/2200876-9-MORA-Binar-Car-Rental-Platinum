import React, { createContext } from 'react'
import useAuth from '../../../Hooks/useAuth'
import { node } from 'prop-types'

export const AuthContext = createContext(null) //= > state

const AuthProvider = ({ children }) => {
  const [postAuth, data] = useAuth() //= > custom hooks;

  const val = [postAuth, { ...data }]

  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: node.isRequired
}

export default AuthProvider