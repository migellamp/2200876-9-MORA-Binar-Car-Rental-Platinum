// import fetch from "node-fetch";
// const fetch = require('node-fetch');

const fetchAPI = async (param, api) => {
    if (!api) throw new Error('this function needs API to works !')
  
    const res = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // => WAJIB
      },
      body: JSON.stringify(param)
    })
    return await res.json()
  }
  
  export default fetchAPI
  