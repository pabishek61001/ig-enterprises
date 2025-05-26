import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import theme from './theme/Theme'
import { ThemeProvider } from '@mui/material/styles';
import "../src/css/App.css"
import AboutPage from './pages/AboutPage'
import WhyusPage from './pages/WhyusPage'

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])



  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/ig-enterprises'>
        <Routes>
          <Route path='' element={<LandingPage />}></Route>
          <Route path='about' element={<AboutPage />}></Route>
          <Route path='why-us' element={<WhyusPage />}></Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App