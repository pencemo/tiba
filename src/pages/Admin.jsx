import React, {createContext, useState} from 'react'
import Slidebar from '../components/Admin/SlidBar/Slidebar'
import { Outlet } from 'react-router-dom'
import './Admin.css'
// import Topbar from '../components/Admin/SlidBar/Topbar'
export const Togglecontext = createContext(null)

function Context({children}){
  const [toggle, setToggle]= useState(true)

  return(
      <Togglecontext.Provider value={{toggle, setToggle}}>
         {children}
      </Togglecontext.Provider>
  )
}


function Admin() {
  return (
    <div className='flex '>
      <Context>
      <Slidebar />
      <Outlet />
      </Context>
      {/* <Topbar /> */}
    </div>
  )
}

export default Admin
