import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Typography, Button, Box} from '@mui/material'
import Navbar from '../components/Navbar'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <Box className='hero' >
          <Typography variant='h4' style={{ fontWeight: 'bold', paddingTop: 60}}>Your curated devotional experience</Typography>
          <Button 
            variant='contained' 
            color='primary' 
            style={{marginTop: 20}}
            onClick={() => navigate('/login')}
          >
            Get Started
          </Button>
      </Box>
    </>
  )
}
