import React from 'react'
import {Container} from '@mui/material'
import Dashboard from './Dashboard'
import Login from './Login'

export default function Music() {
  const code = new URLSearchParams(document.location.search).get("code")
  console.log(code)

  

  return (
    //conditionally rendering either the Login or Dashboard component based on the code value which we will fetch from the URL parameters
    <Container className="player-container"> 
      {code ? <Dashboard code={code} /> : <Login />}
    </Container>
  )
}
