import React from 'react'
import "./Dashbord.css"
import Topbar from '../SlidBar/Topbar'
import Chart from './Chart1'




function Dashbord() {
  return (
    <div className='min-width absolute min-h-[100vh] right-0 flex items-center justify-center  bg-slate-200'>
      <Topbar title={"Dashbord"}/>
      <div className='bg-white px-20 py-16 rounded-2xl mt-20'>
              <div className="w-full ">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* <!-- Grid --> */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {/* <!-- Card --> */}
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                      <div className="p-4 md:p-5">
                        <div className="flex items-center gap-x-2">
                          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                            Total users
                          </p>
                          <div className="hs-tooltip">
                            <div className="hs-tooltip-toggle">
                              <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                                The number of daily users
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-1 flex items-center gap-x-2">
                          <h3 className="numberFont text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                            72,540
                          </h3>
                          <span className="flex items-center gap-x-1 text-green-600">
                            <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                            <span className="numberFont inline-block text-sm">
                              1.7%
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Card -->

                    <!-- Card --> */}
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                      <div className="p-4 md:p-5">
                        <div className="flex items-center gap-x-2">
                          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                            Sessions
                          </p>
                        </div>

                        <div className="mt-1 flex items-center gap-x-2">
                          <h3 className="numberFont text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                            29.4%
                          </h3>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Card -->

                    <!-- Card --> */}
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                      <div className="p-4 md:p-5">
                        <div className="flex items-center gap-x-2">
                          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                            Avg. Click Rate
                          </p>
                        </div>

                        <div className="mt-1 flex items-center gap-x-2">
                          <h3 className="numberFont text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                            56.8%
                          </h3>
                          <span className="flex items-center gap-x-1 text-red-600">
                            <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
                            <span className="numberFont inline-block text-sm">
                              1.7%
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Card -->

                    <!-- Card --> */}
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                      <div className="p-4 md:p-5">
                        <div className="flex items-center gap-x-2">
                          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                            Pageviews
                          </p>
                        </div>

                        <div className="mt-1 flex items-center gap-x-2">
                          <h3 className="numberFont text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                            92,913
                          </h3>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Card --> */}
                  </div>
                  {/* <!-- End Grid --> */}

                  <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* <!-- Card --> */}
                    <div className="p-4 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                      {/* <!-- Header --> */}
                      <div className="flex justify-between items-center">
                        <div>
                          <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                            Income
                          </h2>
                          <p className="numberFont text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                            $126,238.49
                          </p>
                        </div>

                        <div>
                          <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500">
                            <svg className="numberFont inline-block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                            25%
                          </span>
                        </div>
                      </div>
                      {/* <!-- End Header --> */}

                      
                      <Chart  />
                    </div>
                    {/* <!-- End Card -->

                    <!-- Card --> */}
                    <div className="p-4 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                      {/* <!-- Header --> */}
                      <div className="flex justify-between items-center">
                        <div>
                          <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                            Visitors
                          </h2>
                          <p className="numberFont text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                            80.3k
                          </p>
                        </div>

                        <div>
                          <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500">
                            <svg className="numberFont inline-block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                            2%
                          </span>
                        </div>
                      </div>
                      {/* <!-- End Header --> */}

                      <Chart chart2={true} />
                    </div>
                    {/* <!-- End Card --> */}
                  </div>
                  </div>
                  </div>
        
      </div>
    </div>
  )
}

export default Dashbord
