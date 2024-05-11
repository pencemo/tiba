import { X, Info, Fuel, BadgeDollarSign, CalendarDays } from 'lucide-react'
import React from 'react'

function BookForm({data, data2, carData}) {

    const newData=carData[0]
  return (
    <div>
        <div  className='fixed flex  justify-center inset-0  z-50 '>
            <div  onClick={()=>data2(!data)} className="fixed w-full h-full inset-0  bg-black bg-opacity-80"></div>

                <div className="max-w-3xl  mx-auto  overflow-x-auto scrollbar-none  ">
                <div className="bg-white relative rounded-xl shadow p-5 sm:p-7 my-20">
                    <X onClick={()=>data2(!data)} className='absolute right-10 top-10 text-gray-600 cursor-pointer hover:bg-gray-500 rounded-full w-10 h-10 p-2' />
                    <div className="mb-10">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                        Submit Your Detales
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Manage your name, password and account settings.
                    </p>
                    </div>

                    <form>
                    {/* <!-- Grid --> */}
                    <div className="grid sm:grid-cols-12 gap-2 sm:gap-6 ">
                        
                        {/* <!-- End Col --> */}

                        
                        {/* <!-- End Col --> */}

                        <div className="sm:col-span-3">
                        <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                            Full name
                        </label>
                        <div className="hs-tooltip inline-block">
                            <button type="button" className="hs-tooltip-toggle ms-1">
                            <Info strokeWidth={1} className="inline-block size-3 text-gray-400 dark:text-neutral-600" />
                            </button>
                        </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="sm:col-span-9">
                        <div className="sm:flex">
                            <input id="af-account-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="First Name" />
                            <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Last Name" />
                        </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="sm:col-span-3">
                        <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 ">
                            Email
                        </label>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="sm:col-span-9">
                        <input id="af-account-email" type="email" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="example@gmail.com" />
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="sm:col-span-3">
                        <label htmlFor="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 ">
                            Contact No
                        </label>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="sm:col-span-9">
                        <div className="space-y-2">
                            <input id="af-account-password" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 " placeholder="Mobile" />
                            <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 " placeholder="(Optional)" />
                        </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="sm:col-span-3">
                        <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                            Message
                        </label>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="sm:col-span-9">
                        <textarea id="af-account-bio" className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="6" placeholder="Type your message..."></textarea>
                        </div>
                        {/* <!-- End Col --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                    <hr className="border-gray-300 my-10 dark:border-white" />
                    <div className='mt-10'>
                        <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                            Selected Vehicle
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                            Manage your name, password and account settings.
                        </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5 max-md:grid-cols-1'>
                        <img src={newData.url} className='w-full h-auto rounded-lg' alt="" />
                        <div>
                            <h1 className='text-tremor-title font-bold'>{newData.car_name}</h1>
                            <h1 className='text-sm font-medium'>{newData.brand} | {newData.car_category}</h1>
                            <h1 className='numberFont text-xl mt-3 font-medium'>$ {newData.rent_rate}</h1>
                            <div className='flex gap-2 mt-3 '>
                                <div className='flex items-center gap-1'><CalendarDays strokeWidth={1} size={20} /> {newData.year}</div>
                                <div className='flex items-center gap-1'><BadgeDollarSign strokeWidth={1} size={20} /> {newData.mileage}</div>
                                <div className='flex items-center gap-1'><Fuel strokeWidth={1} size={20} /> {newData.type}</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-end gap-x-2">
                        <button onClick={()=>data2(!data)} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                        Cancel
                        </button>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
                {/* <!-- End Card --> */}
                </div>



        </div>
    </div>
  )
}

export default BookForm
