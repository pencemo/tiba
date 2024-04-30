import Card from '../components/Card/Card'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import Icons from '../components/Icons/Icons'
import Landbg from '../components/LandBg/Landbg'
import LogoScroll from '../components/LogoScroll/LogoScroll'
import Navbar from '../components/Navbar/Navbar'
import React from 'react'
import Status from '../components/Status/Status'

function Home() {
  return (
    <div>
      <Navbar />
      <Landbg />
      <LogoScroll />
      <Features />
      <Icons />
      <Card />
      <Status />
      <Footer />
    </div>
  )
}

export default Home
