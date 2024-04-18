import React from 'react'
import Slidebar from '../components/Admin/SlidBar/Slidebar'
import { Outlet } from 'react-router-dom'
import './Admin.css'
import Topbar from '../components/Admin/SlidBar/Topbar'

function Admin() {
  return (
    <div className='flex '>
      <Slidebar />
      <Outlet />
      <Topbar />
    </div>
  )
}

export default Admin
