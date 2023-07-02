import { useState } from 'react'
import { DOMAIN_API } from '../Constants'
import fetchAPI from '../API'


const useAuth = () => {

  const [dataAuth, setAuth] = useState({})
  const [loading, setLoading] = useState(false)

  const postAuth = (param, role) => {
    setLoading(true)
    console.log(role)
    var apiURL = ""

    if (role == "Admin") {
      apiURL = `${DOMAIN_API}/admin/auth/login`
    }
    else if (role == "Customer") {
      apiURL = `${DOMAIN_API}/customer/auth/login`
    }
    
    fetchAPI(param, apiURL).then((result) => {
      setAuth(result)
      setLoading(false)
      if (result.access_token) {
        const accessToken = result.access_token
        document.cookie = `uidTokenBinarApp=${accessToken};max-age=600`
        localStorage.setItem('role', result.role);
      }
    }).catch((error) => {
      setLoading(false)
      console.log('error nih bos' + error)
    })
  }

  return [
    postAuth,
    {
      loading,
      dataAuth
    }
  ]
}

export default useAuth