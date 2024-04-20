import React, {useState} from 'react'
import { Search } from 'lucide-react';
// import PopUp from './PopUp';
import Topbar from '../SlidBar/Topbar';
import { Trash2, SquareArrowOutUpRight, Edit } from 'lucide-react';
import Form from './Form';

function ManageCars() {
  const tabel = [
    {
      name: 'prodect',
      color: 'bleck',
      category: 'lap',
      price: '$1999',
      disc: 'lo@Meglio In HTML you need a ID for the for attribute to work. To make your component reusable you could add a name property to your component that you set as ID and as name attribute on the actual input field.'
    },
    {
      name: 'prodect2',
      color: 'bleck',
      category: 'lap',
      price: '$1956',
      disc: 'lo@Meglio In HTML you need a ID for the for attribute to work. To make your component reusable you could add a name property to your component that you set as ID and as name attribute on the actual input field.'
    },
    {
      name: 'prodect3',
      color: 'red',
      category: 'mob',
      price: '$10232',
      disc: 'lo@Meglio In HTML you need a ID for the for attribute to work. To make your component reusable you could add a name property to your component that you set as ID and as name attribute on the actual input field.'
    },
    {
      name: 'prodect3',
      color: 'red',
      category: 'mob',
      price: '$8699',
      disc: 'lo@Meglio In HTML you need a ID for the for attribute to work. To make your component reusable you could add a name property to your component that you set as ID and as name attribute on the actual input field.'
    },
    {
      name: 'prodect3',
      color: 'red',
      category: 'mob',
      price: '$45639',
      disc: 'lo@Meglio In HTML you need a ID for the for attribute to work. To make your component reusable you could add a name property to your component that you set as ID and as name attribute on the actual input field.'
    },
    {
      name: 'prodect3',
      color: 'red',
      category: 'mob',
      price: '$56321',
      disc: 'lo@Meglio In HTML you need a ID for the for attribute to work. To make your component reusable you could add a name property to your component that you set as ID and as name attribute on the actual input field.'
    },
    {
      name: 'prodect3 name one',
      color: 'red',
      category: 'mob',
      price: '$6999',
      disc: 'lo@Meglio In HTML you need a ID for the for attribute to work. To make your component reusable you could add a name property to your component that you set as ID and as name attribute on the actual input field.'
    },
    {
      name: 'prodect3 name tow',
      color: 'red',
      category: 'mob',
      price: '$57699',
      disc: 'lo@Meglio In HTML you need a ID for the for attribute to work. To make your component reusable you could add a name property to your component that you set as ID and as name attribute on the actual input field.'
    },
    {
      name: 'prodect3',
      color: 'red',
      category: 'mob',
      price: '$56699',
      disc: 'lo@Meglio In HTML you need a ID for the for attribute to work. To make your component reusable you could add a name property to your component that you set as ID and as name attribute on the actual input field.'
    },
    {
      name: 'prodect3',
      color: 'red',
      category: 'mob',
      price: '$5699',
      disc: 'lo@Meglio In HTML you need a ID for the for attribute to work. To make your component reusable you could add a name property to your component that you set as ID and as name attribute on the actual input field.'
    },
  ]

  const link = 'https://imgs.search.brave.com/7UUVRHa9rNXdUhmG4wK32jHranQNExwBLBgtHsjVeeQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQ5NzYzODg1MzEt/ZDEwNTg0OTRjZGQ4/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFky/RnlmR1Z1ZkRCOGZE/QjhmSHd3'
  const [open, setOpen] =useState(false)
  const [form, setForm] =useState(false)

  const handlClick = (id)=>{
    console.log(id);
    setOpen(!open)
  }

  return (
    <div className='min-width flex absolute h-auto right-0 justify-center px-16 max-lg:px-2  bg-slate-200'>
      <Topbar />

      <div className="p-8 px-16 max-lg:px-2 my-36 bg-white relative scrollbar-track-rounded-full scrollbar  scrollbar-thumb-slate-300 scrollbar-track-slate-50 overflow-x-auto  shadow-md rounded-lg ">
          <div className="flex mt-6 flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
              
              <label  className="sr-only">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" strokeWidth={1.25} />
                  </div>
                  <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
              </div>
              <button onClick={()=>setForm(!form)} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add Cars</button>
          </div>
          <table className="w-full mt-3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      {/* <th scope="col" className="p-4">
                          <div className="flex items-center">
                              <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                          </div>
                      </th> */}
                      <th scope="col" className="px-6 py-3">
                          Product name
                      </th>
                      {/* <th scope="col" className="px-6 py-3">
                          Product name
                      </th> */}
                      <th scope="col" className="px-12 py-3">
                          Color
                      </th>
                      <th scope="col" className="px-12 py-3">
                          Category
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
                  {tabel.map(items=>{
                    return<tr key={items.price}  className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {/* <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                        </div>
                    </td> */}
                    <th scope="row" className="capitalize flex gap-3 items-center px-6 py-4 text-base font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      <img class="w-10 h-10 rounded-full" src={link} alt="Rounded avatar" />
                      {items.name}
                    </th>
                    {/* <th scope="row" className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {items.name}
                    </th> */}
                    <td className="px-12 py-4">
                      {items.color}
                    </td>
                    <td className="px-12 py-4">
                    {items.category}
                    </td>
                    <td className="px-12 py-4">
                    {items.price}
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
      </div>
      {/* {open && <PopUp data={open} data2={setOpen} />} */}
      {form && <Form data={form} data2={setForm}/>}


    </div>
  )
}

export default ManageCars
