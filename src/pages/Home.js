import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {Typography, Button, Box} from '@mui/material'
import Navbar from '../components/Navbar'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase-config'

export default function Home() {
  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          // ...
          navigate('/')
        } else {
          // User is signed out
          // ...
          navigate('/login')
        }
      });
     
  }, [])


  return (
    <>
      <Navbar />
      <Box className='hero' >
          <Typography variant='h4' style={{ fontWeight: 'bold', paddingTop: 60}}>Your curated devotional experience</Typography>
          <Button 
            variant='contained' 
            color='primary' 
            style={{marginTop: 20}}
            onClick={() => navigate('/spotifylogin')}
          >
            Get Started
          </Button>
      </Box>
    </>
  )
}
