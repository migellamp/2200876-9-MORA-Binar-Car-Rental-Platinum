import React, { createContext } from 'react'

import useAuthRegister from '../../hooks/useAuthRegister'

export const authContextRegister = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProviderRegister = ({ children }) => {
  const [postAuthRegister, dataAuthRegister] = useAuthRegister()
  const valRegister = [postAuthRegister, { ...dataAuthRegister }]
  return (
    <authContextRegister.Provider value={valRegister}>
      {children}
    </authContextRegister.Provider>
  )
}

export default AuthProviderRegister
