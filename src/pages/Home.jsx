import Card from '../components/Card/Card'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import Icons from '../components/Icons/Icons'
import Landbg from '../components/LandBg/Landbg'
import LogoScroll from '../components/LogoScroll/LogoScroll'
import Navbar from '../components/Navbar/Navbar'
import React from 'react'

function Home() {
  return (
    <div>
      <Navbar />
      <Landbg />
      <LogoScroll />
      <Features />
      <Icons />
      <Card />
      <Footer />
    </div>
  )
}

export default Home
