import React, {useEffect, useState} from 'react'
import { tabel} from '../../../data'
import { Calendar, Info, LayoutList, MapPin, Phone, UserRound, X } from 'lucide-react'

function PopUp(props) {
  const open =(()=>{
    props.data2(!props.data)
  })
  
  const image = 'https://imgs.search.brave.com/EzU3FIcr0aOzYx7LgkPVhtMr9nCKhuYnm2zsXDoBShg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/aWx2ZXItbHV4dXJ5/LXNwb3J0LWNhci1w/b3J0XzExNDU3OS01/MjAwLmpwZz9zaXpl/PTYyNiZleHQ9anBn'

 
  const data=props.product[0]
  // console.log(data);
  
  return (
    <div  className='fixed flex justify-center  z-30 w-[100vw] inset-0 min-h-[100vh] '>
      <div onClick={open} className="fixed w-full h-full inset-0  bg-black bg-opacity-80"></div>

      <div className='max-w-[60rem] max-h-[700px] my-10 overflow-y-auto scrollbar-none relative p-12 rounded-3xl bg-white '>
        <X onClick={open} className='absolute right-10 cursor-pointer bg-gray-200 p-1 w-9 h-9 rounded-full text-gray-600' strokeWidth={1.5}/>
        <h1 className='font-semibold text-indigo-600 border-b border-gray-300 text-lg pb-5'>Product Delalis</h1>

        {/* detaile  */}

        <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-6 mt-6'>
          <div className='flex flex-col gap-2 '>

            <div className='flex gap-3 hover:bg-gray-100 p-3 '>
                <Info strokeWidth={1.25}  />
              <div className=''>
                <h1 className='text-gray-500 m-0 p-0'>Order Id</h1>
                <h1 className='text-gray-800 numberFont font-semibold text-base m-0'>{data.id}</h1>
              </div>
            </div>
            <div className='flex gap-3 hover:bg-gray-100 p-3 '>
                <UserRound strokeWidth={1.25}  />
              <div className=''>
                <h1 className='text-gray-500 m-0 p-0'>Customer Name</h1>
                <h1 className='text-gray-800  font-semibold text-base m-0'>{data.name}</h1>
              </div>
            </div>
            <div className='flex gap-3 hover:bg-gray-100 p-3 '>
                <Phone strokeWidth={1.25}  />
              <div className=''>
                <h1 className='text-gray-500 m-0 p-0'>Contact info</h1>
                <h1 className='text-gray-800  font-semibold text-base m-0 numberFont'>+91 1234 567 890</h1>
                <h1 className='text-gray-800  font-semibold text-base m-0 '>info@123gmail.com</h1>
              </div>
            </div>
            <div className='flex gap-3 hover:bg-gray-100 p-3 '>
                <MapPin strokeWidth={1.25}  />
              <div className=''>
                <h1 className='text-gray-500 m-0 p-0'>Location</h1>
                <h1 className='text-gray-800  font-semibold text-base m-0 '>Laxmisagar, BBSR, Bhubaneshwar-751006</h1>
              </div>
            </div>

            </div>
            <div className='space-y-4'>
                <img src={data.featuredImage} alt="" className='w-80 rounded-2xl h-auto bg-slate-200 '/>
              <div className=' flex gap-5'>
                <div className=''>
                  <h1 className='text-gray-500 m-0 p-0'>Vehicle Details</h1>
                  <h1 className='text-gray-800  font-semibold text-base m-0 max-w-44 '>Tesla Luxury Electric Vehicles 2003-Present</h1>
                </div>
                <div className=''>
                  <h1 className='text-gray-500 m-0 p-0'>Order Id</h1>
                  <h1 className='text-gray-800  font-semibold text-base m-0 numberFont'>751006</h1>
                </div>
              </div>
          </div>
        </div>


        {/* bottam line */}

        <div className='border-t py-5 mt-7 flex gap-3 justify-between items-start flex-wrap'>
            <div className='flex gap-3 hover:bg-gray-100 p-3 '>
                <Calendar strokeWidth={1.25}  />
              <div className=''>
                <h1 className='text-gray-500 m-0 p-0'>Date & Time</h1>
                <h1 className='text-gray-800  font-semibold text-base m-0 '>March 24 Sunday / 12pm</h1>
              </div>
            </div>
            <div className='flex gap-3 hover:bg-gray-100 p-3 '>
                <LayoutList strokeWidth={1.25}  />
              <div className=''>
                <h1 className='text-gray-500 m-0 p-0'>Showroom</h1>
                <h1 className='text-gray-800  font-semibold text-base m-0 '>Bhubaneshwar-751006</h1>
              </div>
            </div>
            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            Conform
            </button>
        </div>



      </div>
    </div>
  )
}

export default PopUp
