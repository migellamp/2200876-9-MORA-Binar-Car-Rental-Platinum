import React, { useContext } from 'react'
import FormSignUp from './FormSignUp'

import { authContextRegister } from '../../context/authRegister'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [, dataAuthRegister] = useContext(authContextRegister)
  const { id } = dataAuthRegister?.dataAuthRegister || {}
  if (id) return navigate('/')
  return <FormSignUp />
}

export default SignUp
