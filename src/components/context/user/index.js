import React, { createContext, useState } from 'react'
import { node } from 'prop-types'
import useGetUsers from '../../hooks/useGetUsers'

export const UserContext = createContext(null)
// Provider =>
const UserProvider = ({ children }) => {
  // custom hooks
  const { data: dataUser, loading, error } = useGetUsers()
  const [showCard, setShowCard] = useState(false)

  const userObj = {
    dataUser: dataUser?.data,
    loading,
    error,
    setShowCard,
    showCard
  }

  return (
    <UserContext.Provider value={userObj}>{children}</UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: node.isRequired
}

export default UserProvider

// Consumer
