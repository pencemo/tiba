import React, {useState} from 'react'
import { Search } from 'lucide-react';
// import PopUp from './PopUp';
import Topbar from '../SlidBar/Topbar';
import { Trash2, SquareArrowOutUpRight, Edit, Plus, Dot } from 'lucide-react';
import Form from './Form';
import  { cars } from '../../../data'

function ManageCars() {
  


    const [open, setOpen] =useState(false)
  const [form, setForm] =useState(false)

  const handlClick = (id)=>{
    console.log(id);
    setOpen(!open)
  }

  return (
    <div className='min-width flex absolute min-h-screen right-0 justify-center px-16 max-lg:px-2  bg-slate-200'>
      <Topbar title={"Manage Cars"} />

      <div className="min-w-full p-8 px-16 max-lg:px-2 my-36 bg-white relative scrollbar-track-rounded-full scrollbar  scrollbar-thumb-slate-300 scrollbar-track-slate-50 overflow-x-auto  flex flex-col flex-wrap gap-4 shadow-md rounded-lg ">
          <div className=" w-full flex mt-6 flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
              
              <label  className="sr-only">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" strokeWidth={1.25} />
                  </div>
                  <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
              </div>
              <button onClick={()=>setForm(!form)} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                <Plus strokeWidth={2} />
                Add New Car
              </button>
          </div>
          <table className=" w-full mt-3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      
                      <th scope="col" className="px-6 py-3">
                          Product name
                      </th>
                      <th scope="col" className="px-12 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-12 py-3">
                          Brand
                      </th>
                      <th scope="col" className="px-12 py-3">
                          Price
                      </th>
                      
                      <th scope="col" className="px-14 py-3">
                          Action
                      </th>
                      <th scope="col" className="px-14 py-3">
                          Action
                      </th>
                      <th scope="col" className="px-14 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {cars.map(items=>{
                    return<tr key={items.id}  className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                    <th scope="row" className="capitalize flex gap-3 items-center px-6 py-4 text-base font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      <img className="w-20 aspect-[4/3] object-cover rounded-md" src={items.url} alt="Rounded avatar" />
                      {items.car_name}
                    </th>
                    
                    <td className="px-12 py-4">
                      {items.car_category}
                    </td>
                    <td className="px-12 py-4">
                    {items.brand}
                    </td>
                    <td className="px-12 py-4 numberFont text-base">
                     $ {items.rent_rate}
                    </td>
                    
                    <td className="px-12 py-4">
                        <h4 onClick={()=>handlClick(items.price)} className="cursor-pointer flex items-center gap-2 p-1 px-2 rounded-md font-semibold text-blue-600 dark:text-blue-500 hover:underline hover:bg-slate-200">View <SquareArrowOutUpRight size={22} strokeWidth={1.25} /></h4>
                    </td>
                    <td className="px-12 py-4">
                        <h4 className="cursor-pointer flex items-center gap-2 p-1 px-2 rounded-md font-semibold text-blue-600 dark:text-blue-500 hover:underline hover:bg-slate-200">Edit <Edit strokeWidth={1.25} /></h4>
                    </td>
                    <td className="px-12 py-4">
                        <h4 className="cursor-pointer flex items-center gap-2 p-1 px-2 rounded-md font-semibold text-blue-600 dark:text-blue-500 hover:underline hover:bg-slate-200">Delete <Trash2 strokeWidth={1.25} /></h4>
                    </td>
                </tr>}

                  )}
              </tbody>
          </table>
          {/* {cars.map(items=>{
            return<div className='border rounded-md p-3 bg-slate-50 flex gap-10'>
            <div>
                <img className='w-52 aspect-[3/2.5] object-cover rounded-md' src={items.url} alt="" />
            </div>
            <div className='flex flex-col w-full'>
                <h1 className='font-bold text-2xl text'>{items.car_name}</h1>
                <div className='numberFont flex gap-0  font-normal text-gray-500'>
                    <span>brand</span>
                    <Dot />
                    <span>Category</span>
                    <Dot />
                    <span>Coler</span>
                    <Dot />
                    <span>2023</span>
                </div>
                <div className='flex justify-between items-end mt-7'>
                    <div className='flex items-center gap-3 '>
                        <img class="w-10 h-10 rounded object-contain border p-1" src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2022-01%2Fm3q8gub8_car_625x300_11_January_22.jpg&w=750&q=75" alt="" />
                        <div>
                            <h4 className='text-base font-semibold'>Car brand and category </h4>
                            <h4 className='text-sm font-normal'>And category </h4>
                        </div>
                    </div>
                    <h4 className='numberFont text-tremor-content-strong text-tremor-title font-semibold'>$ 2256 <span>/Day</span></h4>
                    <div className='flex gap-5'>
                        <button className='bg-blue-200 py-1 px-3 rounded text-blue-800 font-semibold hover:bg-blue-300 flex gap-2 items-center justify-center'><Trash2 size={20} strokeWidth={1.5}/>View</button>
                        <button className='bg-blue-200 py-1 px-3 rounded text-blue-800 font-semibold hover:bg-blue-300 flex gap-2 items-center justify-center'><Trash2 size={20} strokeWidth={1.5}/>View</button>
                        <button className='bg-blue-200 py-1 px-3 rounded text-blue-800 font-semibold hover:bg-blue-300 flex gap-2 items-center justify-center'><Trash2 size={20} strokeWidth={1.5}/>View</button>
                    </div>
                </div>
            </div>
          </div>
          })} */}
      </div>
      {/* {open && <PopUp data={open} data2={setOpen} />} */}
      {form && <Form data={form} data2={setForm}/>}


    </div>
  )
}

export default ManageCars
