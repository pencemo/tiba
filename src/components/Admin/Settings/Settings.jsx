import React from 'react'
import Topbar from '../SlidBar/Topbar'

 
function Settings() {

  const image = 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
  return (
    <div className='min-width flex flex-col min-h-full absolute right-0  max-lg:px-2  bg-slate-200'>
        <Topbar title={"Settings Page"} />


        {/* <!-- Card Section --> */}
    <div className="max-w-5xl py-10  m-auto">
      <div className="bg-white rounded-xl shadow p-6 sm:p-10">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800">
            Showroom Profile Settings
          </h2>
          <p className="text-sm text-gray-600">
            Manage your name, and account settings.
          </p>
        </div>

        <form>
          {/* <!-- Grid --> */}
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
            <div className="sm:col-span-3">
              <label className="inline-block text-sm text-gray-800 mt-2.5">
                Profile photo
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-9">
              <div className="flex items-center gap-5">
                <img className="inline-block size-16 rounded-full ring-2 ring-white" src={image} alt="Image Description" />
                <div className="flex gap-x-2">
                  <div>
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                      Upload photo
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5">
                Full name
              </label>
              <div className="hs-tooltip inline-block relative">
                <button type="button" className="hs-tooltip-toggle ms-1">
                  <svg className="inline-block size-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                 
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0  text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Last Name" />
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5">
                Email
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-9">
              <input id="af-account-email" type="email" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email Id" />
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label htmlFor="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5">
                Password
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="space-y-2">
                <input id="af-account-password" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Mobail" />
                <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Land Phone" />
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label htmlFor="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5">
                Location
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="space-y-2">
                <input id="af-account-password" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Mobail" />
              </div>
            </div>

          </div>
          {/* <!-- End Grid --> */}

          <div className="mt-5 flex justify-end gap-x-2">
            {/* <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
              Cancel
            </button> */}
            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Save changes
            </button>
          </div>

        </form>
      </div>
    </div>
        </div>
  )
}

export default Settings
