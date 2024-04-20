import React, {useContext} from 'react'
import { Search, Menu } from 'lucide-react';
import { Togglecontext } from '../../../pages/Admin';

function Topbar() {

    const {toggle, setToggle} =useContext(Togglecontext)
    // const [toggle, setToggle]= useState(false)
    // console.log(toggle);
  return (
    <div className=' w-full absolute top-0 right-0 h-24 bg-white'>
        <div className='w-[100%] h-[100%]  flex items-center px-10 justify-between container'>
            <div className='flex items-center gap-3'>
                <Menu onClick={()=>setToggle(!toggle)} className='hidden max-lg:flex cursor-pointer hover:bg-gray-300 rounded-full w-9 h-9 p-1' strokeWidth={1.25} />
                <h1 className='font-bold text-3xl text-blue-500'>Admin Panel</h1>
            </div>
            

            <div className='flex items-center gap-5'>
                <div className='flex items-center '>
                <label  className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Search className="w-4 h-4" />
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search......" required />
                </div>
                {/* <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    
                    <Search className="w-4 h-4" />
                    <span className="sr-only">Search</span>
                </button> */}
                </div>
                <img className="w-10 h-10 rounded-full cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SnDtnoTbs_JJtNW62ALeA4gKPtpCGcQ5CnVEJNNAddxjuLwrbo1c16rExrxYL4xLmIw&usqp=CAU" alt="Rounded avatar"/>
                
            </div>
       
        </div>
    </div>
  )
}

export default Topbar
