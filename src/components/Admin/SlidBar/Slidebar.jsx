import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutGrid, CarFront, Layers2, Settings, ContactRound, UserRoundCog, LogOut } from 'lucide-react';
import logo2 from "../../../assets/Logo2.png"
import './Slidbar.css'

function Slidebar() {
  return (
    <div className=' z-10 bg-indigo-600 w-72 h-screen pl-6 flex gap-2 flex-col  text-white'>
      <img src={logo2} alt="" className='w-32 mt-8' />
      <NavLink to="dashboard" className='hover:bg-indigo-700 mt-24 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <LayoutGrid size={26} strokeWidth={1.5} /> <span className='text-lg font-medium'>Dashbord</span>
      </NavLink>
      <NavLink to="order" className='hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <Layers2 size={26} strokeWidth={1.5} /> <span className='text-lg font-medium'>All Orders</span>
      </NavLink>
      <NavLink to="manage-car" className='hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <CarFront size={26} strokeWidth={1.5} /> <span className='text-lg font-medium'>Manage Cars</span>
      </NavLink>
      <NavLink to="manage-admin" className='hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <UserRoundCog size={26} strokeWidth={1.5} /> <span className='text-lg font-medium'>Manage Admin</span>
      </NavLink>
      <NavLink to="settings" className='hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <Settings size={26} strokeWidth={1.5} /> <span className='text-lg font-medium'>Settings</span>
      </NavLink>
      <NavLink to="enquiries" className='hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <ContactRound size={26} strokeWidth={1.5} /> <span className='text-lg font-medium'>Enquiries</span>
      </NavLink>
      <div className="line w-[90%] h-[1px] bg-indigo-300 mt-36"></div>
      <div  className='hover:bg-indigo-700 w-[90%] mt-10 rounded-md p-2 flex gap-4 align-middle pl-6'>
        <LogOut size={26} strokeWidth={1.5} /> <span className='text-lg font-medium'>LogOut</span>
      </div>
    </div>
  )
}

export default Slidebar
