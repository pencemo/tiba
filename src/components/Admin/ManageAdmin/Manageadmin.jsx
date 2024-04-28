import React from 'react'
import Topbar from '../SlidBar/Topbar'
import { UserRoundPlus, ChevronRight, ChevronDown, Search } from 'lucide-react';
import  { tabel } from '../../../data'


function Manageadmin() {
    // console.log(tabel);
    const link = 'https://imgs.search.brave.com/7UUVRHa9rNXdUhmG4wK32jHranQNExwBLBgtHsjVeeQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQ5NzYzODg1MzEt/ZDEwNTg0OTRjZGQ4/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFky/RnlmR1Z1ZkRCOGZE/QjhmSHd3'

  return (
    <div className='min-width flex flex-col min-h-full absolute right-0  px-5 max-lg:px-2  bg-slate-200'>
        <Topbar title={"Manage Admin"} />
        


            <div className="max-w-[85rem] mt-24  m-6  sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-3">

                <a className="group flex flex-col justify-center bg-gray-50 hover:bg-gray-100 hover:shadow-lg transition-all  rounded-xl p-4 md:p-7" href="#">
                <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
                <UserRoundPlus className="flex-shrink-0 size-6 text-white"  />
                </div>
                <div className="mt-5">
                    <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">Add New Admins</h3>
                    <p className="mt-1 text-gray-600">Responsive, and mobile-first project on the web</p>
                    <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                    Learn more
                    <ChevronRight className="flex-shrink-0 size-4"  /> </span>
                </div>
                </a>

                <a className="group flex flex-col justify-center bg-gray-50 hover:bg-gray-100 hover:shadow-lg transition-all rounded-xl p-4 md:p-7" href="#">
                <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
                <UserRoundPlus className="flex-shrink-0 size-6 text-white"  />
                </div>
                <div className="mt-5">
                    <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">Customizable</h3>
                    <p className="mt-1 text-gray-600">Components are easily customized and extendable</p>
                    <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                    Learn more
                    <ChevronRight className="flex-shrink-0 size-4"  />
                    </span>
                </div>
                </a>

                <a className="group flex flex-col justify-center bg-gray-50 hover:bg-gray-100 hover:shadow-lg transition-all rounded-xl p-4 md:p-7" href="#">
                <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
                <UserRoundPlus className="flex-shrink-0 size-6 text-white"  />
                </div>
                <div className="mt-5">
                    <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">Documentation</h3>
                    <p className="mt-1 text-gray-600">Every component and plugin is well documented</p>
                    <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                    Learn more
                    <ChevronRight className="flex-shrink-0 size-4"  />   </span>
                </div>
                </a>
            
                <a className="group flex flex-col justify-center bg-gray-50 hover:bg-gray-100 hover:shadow-lg transition-all rounded-xl p-4 md:p-7" href="#">
                <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
                <UserRoundPlus className="flex-shrink-0 size-6 text-white"  />
                </div>
                <div className="mt-5">
                    <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">24/7 Support</h3>
                    <p className="mt-1 text-gray-600">Contact us 24 hours a day, 7 days a week</p>
                    <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                    Learn more
                    <ChevronRight className="flex-shrink-0 size-4"  />   </span>
                </div>
                </a>
            </div>
            </div>



            
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-16 max-lg:mx-1 ">
    <div className=" flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-8 bg-white dark:bg-gray-900 px-10">
        <div className='flex items-center gap-5 '>
            <h1 className='font-bold text-2xl mr-10 text-gray-700'>Admin List</h1>

            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Action button</span>
                Action
                <ChevronDown strokeWidth={1.25} />
            </button>
            
            <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" strokeWidth={1.25} />
            </div>
            <input type="text" id="table-search-users" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
        </div>
    </div>
    
    <div className='px-10 bg-white'>
    <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Position
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {tabel.map(items=>{
                return<tr key={items.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={link} alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">{items.name}</div>
                        <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                    React Developer
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>})}
            
        </tbody>
    </table>
    </div>
    
    {/* <div id="editUserModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            
            <form class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Edit user
                    </h3>
                   <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                </div>

                <div class="p-6 space-y-6">
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input type="text" name="first-name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required="" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input type="text" name="last-name" id="last-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Green" required="" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" required="" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input type="number" name="phone-number" id="phone-number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. +(12)3456 789" required="" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="department" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                            <input type="text" name="department" id="department" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Development" required="" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                            <input type="number" name="company" id="company" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required="" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                            <input type="password" name="current-password" id="current-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required=""/>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                            <input type="password" name="new-password" id="new-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="" />
                        </div>
                    </div>
                </div>
                
                <div class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
                </div>
            </form>
        </div>
    </div> */}

</div>

                

        

    </div>
  )
}

export default Manageadmin
