import { X, Info, Fuel, BadgeDollarSign, CalendarDays } from 'lucide-react'
import React from 'react'

function BookForm({data, data2, carData}) {

    const newData=carData[0]
  return (
    <div>
        <div  className='fixed flex  justify-center inset-0  z-50 '>
            <div  onClick={()=>data2(!data)} className="fixed w-full h-full inset-0  bg-black bg-opacity-80"></div>
            <X onClick={()=>data2(!data)} className='absolute right-10 top-10 text-gray-600 cursor-pointer hover:bg-gray-500 rounded-full w-10 h-10 p-2' />
      {/* <form className='max-w-2xl min-h-auto overflow-x-auto scrollbar-none rounded-2xl bg-gray-50 my-10 relative p-20 max-lg:px-6'>
      <div className=" ">
        <div className="">
          <h2 className="text-2xl font-bold leading-7 text-indigo-600">Add Your Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
          


          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Contact No
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Email ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Location Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="mileage" className="block text-sm font-medium leading-6 text-gray-900">
               Mileage
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="mileage"
                  id="mileage"
                  placeholder='Mileage'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Capacity" className="block text-sm font-medium leading-6 text-gray-900">
                Seating Capacity
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="Capacity"
                  id="Capacity"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                Year
              </label>
              <div className="mt-2">
                <input
                  type="month"
                  name="year"
                  id="year"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">
               Color
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="color"
                  id="color"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="rentDay" className="block text-sm font-medium leading-6 text-gray-900">
                Rent / Day
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="rentDay"
                  id="rentDay"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="rentDay" className="block text-sm font-medium leading-6 text-gray-900">
                Rent / Month
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="rentDay"
                  id="rentDay"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="mb-5">
          <div className="mt-10 space-y-10">
            
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Fuel or Type</legend>
              <div className="mt-2 flex gap-6 flex-wrap">
                
                <div className="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications"
                    value='Petrol'
                    type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900"> Petrol</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications"
                    value='Diesel'
                    type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900"> Diesel </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications"
                    value='Electric'
                    type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">Electric </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications"
                    value='Hybrid'
                    type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">Hybrid </label>
                </div>

              </div>
            </fieldset>
          </div>
        </div>

        <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Discription
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>


      <div className="mt-6 flex items-center justify-end gap-x-6 ">
        <button type="button"  className="px-2 py-2 hover:bg-slate-200 rounded-md text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>

      </div>
    </form> */}

                <div class="max-w-3xl   mx-auto  min-h-auto overflow-x-auto scrollbar-none relative ">
                <div class="bg-white rounded-xl shadow p-5 sm:p-7 my-20">
                    <div class="mb-10">
                    <h2 class="text-xl font-bold text-gray-800 dark:text-neutral-200">
                        Submit Your Detales
                    </h2>
                    <p class="text-sm text-gray-600 dark:text-neutral-400">
                        Manage your name, password and account settings.
                    </p>
                    </div>

                    <form>
                    {/* <!-- Grid --> */}
                    <div class="grid sm:grid-cols-12 gap-2 sm:gap-6 ">
                        
                        {/* <!-- End Col --> */}

                        
                        {/* <!-- End Col --> */}

                        <div class="sm:col-span-3">
                        <label for="af-account-full-name" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                            Full name
                        </label>
                        <div class="hs-tooltip inline-block">
                            <button type="button" class="hs-tooltip-toggle ms-1">
                            <Info strokeWidth={1} class="inline-block size-3 text-gray-400 dark:text-neutral-600" />
                            </button>
                        </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div class="sm:col-span-9">
                        <div class="sm:flex">
                            <input id="af-account-full-name" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="First Name" />
                            <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Last Name" />
                        </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div class="sm:col-span-3">
                        <label for="af-account-email" class="inline-block text-sm text-gray-800 mt-2.5 ">
                            Email
                        </label>
                        </div>
                        {/* <!-- End Col --> */}

                        <div class="sm:col-span-9">
                        <input id="af-account-email" type="email" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="example@gmail.com" />
                        </div>
                        {/* <!-- End Col --> */}

                        <div class="sm:col-span-3">
                        <label for="af-account-password" class="inline-block text-sm text-gray-800 mt-2.5 ">
                            Contact No
                        </label>
                        </div>
                        {/* <!-- End Col --> */}

                        <div class="sm:col-span-9">
                        <div class="space-y-2">
                            <input id="af-account-password" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 " placeholder="Mobile" />
                            <input type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 " placeholder="(Optional)" />
                        </div>
                        </div>
                        {/* <!-- End Col --> */}

                        <div class="sm:col-span-3">
                        <label for="af-account-bio" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                            Message
                        </label>
                        </div>
                        {/* <!-- End Col --> */}

                        <div class="sm:col-span-9">
                        <textarea id="af-account-bio" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="6" placeholder="Type your message..."></textarea>
                        </div>
                        {/* <!-- End Col --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                    <hr class="border-gray-300 my-10 dark:border-white" />
                    <div className='mt-10'>
                        <div class="mb-8">
                        <h2 class="text-xl font-bold text-gray-800 dark:text-neutral-200">
                            Selected Vehicle
                        </h2>
                        <p class="text-sm text-gray-600 dark:text-neutral-400">
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

                    <div class="mt-5 flex justify-end gap-x-2">
                        <button onClick={()=>data2(!data)} type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                        Cancel
                        </button>
                        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
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
