import React, {useState, useEffect} from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline} from '@mui/material'
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import JournalPage from "./pages/JournalPage"
import SpotifyLoginPage from './pages/SpotifyLoginPage'
import DevotionalPage from "./pages/DevotionalPage"
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"
import './App.css'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#13467a',
      darker: '#13467a',
    },
    secondary: {
      main: '#3bb78f',
      darker: '#13467a'
    },
    neutral: {
      main: '#bed5ea',
      contrastText: '#fff',
    },
  }
})

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/spotifylogin" element={<SpotifyLoginPage />} />
          <Route path="/devotional" element={<DevotionalPage />} />
        </Routes>
      </ThemeProvider>
  )
}

export default App;
