import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import CarListHead from '../components/Carlist/Head/CarListHead'
import Cars from '../components/Carlist/Cars/Cars'
import FilterBar from '../components/Carlist/Cars/FilterBar/FilterBar'

function CarsList() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <CarListHead /> */}
      <FilterBar />
      <Cars />
      <Footer />
    </div>
  )
}

export default CarsList
