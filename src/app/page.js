import React from 'react'
import Home from './Home/page'
import Navbar from '@/Components/Navbar/Navbar'
import GsapSmooth from '@/Components/LocomotiveScroll/SmoothScroll'

const App = () => {
  return (
    <>
    
      <GsapSmooth>
        <Navbar/>
        <Home />
      </GsapSmooth>
    </>
  )
}

export default App