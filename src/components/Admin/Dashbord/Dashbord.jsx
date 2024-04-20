import React from 'react'
import "./Dashbord.css"
import Topbar from '../SlidBar/Topbar'

function Dashbord() {
  return (
    <div className='min-width absolute h-[100vh] right-0 flex items-center justify-center  bg-slate-200'>
      <Topbar/>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashbord
