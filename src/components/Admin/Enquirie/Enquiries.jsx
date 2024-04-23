import React, {useState} from 'react'
import Topbar from '../SlidBar/Topbar';
import { Trash2, SquareArrowOutUpRight, Edit, Plus, Search  } from 'lucide-react';
import  { user } from '../../../data'



function Enquiries() {
  return (
    <div className='min-width flex flex-col min-h-full absolute right-0  max-lg:px-2 px-10 bg-slate-200'>
        <Topbar title={"Enquiries"}/>
        <div className="p-8 px-16 max-lg:px-2 my-36 bg-white relative scrollbar-track-rounded-full scrollbar  scrollbar-thumb-slate-300 scrollbar-track-slate-50 overflow-x-auto  shadow-md rounded-lg ">
          <div className=" w-full flex mt-6 flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
              
              <label  className="sr-only">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" strokeWidth={1.25} />
                  </div>
                  <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
              </div>
              <button  type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                <Plus strokeWidth={2} />
                Add New Car
              </button>
          </div>
          <table className=" w-full mt-3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      {/* <th scope="col" className="p-4">
                          <div className="flex items-center">
                              <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                          </div>
                      </th> */}
                      <th scope="col" className="px-6 py-3">
                         Name of 
                      </th>
                      {/* <th scope="col" className="px-6 py-3">
                          Product name
                      </th> */}
                      <th scope="col" className="px-12 py-3">
                          Contact No
                      </th>
                      <th scope="col" className="px-12 py-3">
                          Mail Id
                      </th>
                      <th scope="col" className="px-12 py-3">
                          Subject
                      </th>
                      
                      <th scope="col" className="px-14 py-3">
                          Message
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
                  {user.map(items=>{
                    return<tr key={items.id}  className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {/* <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                        </div>
                    </td> */}
                    <th scope="row" className="capitalize flex gap-3 items-center px-6 py-4 text-base font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      {items.name}
                    </th>
                    {/* <th scope="row" className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {items.name}
                    </th> */}
                    <td className="px-12 py-4">
                      {items.phone}
                    </td>
                    <td className="px-12 py-4">
                    {items.email}
                    </td>
                    <td className="px-12 py-4">
                      {items.company.name}
                    </td>
                    
                    <td className="px-12 py-4">
                        <h4  className="cursor-pointer flex items-center gap-2 p-1 px-2 rounded-md font-semibold text-blue-600 dark:text-blue-500 hover:underline hover:bg-slate-200">View <SquareArrowOutUpRight size={22} strokeWidth={1.25} /></h4>
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
      </div>
    </div>
  )
}

export default Enquiries
