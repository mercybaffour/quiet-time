import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline} from '@mui/material'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import SpotifyLoginPage from './pages/SpotifyLoginPage'
import DevotionalPage from "./pages/DevotionalPage"
import './App.css'

function App() {
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
        darker: 'success'
      },
      neutral: {
        main: '#bed5ea',
        contrastText: '#fff',
      },
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SpotifyLoginPage />} />
          <Route path="/devotional" element={<DevotionalPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
