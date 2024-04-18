import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard, CarFront, KeySquare } from 'lucide-react';


function Slidebar() {
  return (
    <div className='sidebar bg-indigo-600 w-72 h-screen pl-3 flex gap-2 flex-col pt-40 text-blue-50'>
      <Link to="/admin" className='hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <LayoutDashboard size={26} strokeWidth={1.2} /> <span className='text-lg font-medium'>Dashbord</span>
      </Link>
      <Link to="/admin" className='hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <CarFront size={28} strokeWidth={1.2} /> <span className='text-lg font-medium'>Orders</span>
      </Link>
      <Link to="/admin" className='hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <KeySquare size={28} strokeWidth={1.2} /> <span className='text-lg font-medium'>Manage Cars</span>
      </Link>
      <Link to="/admin" className='hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <CarFront size={28} strokeWidth={1.2} /> <span className='text-lg font-medium'>Manage Admin</span>
      </Link>
      <Link to="/admin" className='hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <CarFront size={28} strokeWidth={1.2} /> <span className='text-lg font-medium'>Orders</span>
      </Link>
    </div>
  )
}

export default Slidebar
