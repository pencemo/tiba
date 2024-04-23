import React, {useContext} from 'react'
import { BellRing, Menu } from 'lucide-react';
import { Togglecontext } from '../../../pages/Admin';

function Topbar({title}) {

    const {toggle, setToggle} =useContext(Togglecontext)
    // const [toggle, setToggle]= useState(false)
    // console.log(toggle);
  return (
    <div className=' w-full fixed min-width z-10 shadow top-0 right-0 h-24 bg-white'>
        <div className='w-[100%] h-[100%]  flex items-center px-10 justify-between container'>
            <div className='flex items-center gap-3'>
                <Menu onClick={()=>setToggle(!toggle)} className='hidden max-lg:flex cursor-pointer hover:bg-gray-300 rounded-full w-9 h-9 p-1' strokeWidth={1.25} />
                <h1 className='font-bold text-3xl max-lg:text-2xl text-gray-600'>{title}</h1>
            </div>
            

            <div className='flex items-center gap-3'>
                <div className='flex items-center '>
                <BellRing strokeWidth={1} className='cursor-pointer  hover:bg-gray-200 p-2 w-9 h-9 rounded-full' />
                </div>
                <div className='w-[1px] h-5 bg-gray-400'></div>
                <div className='flex items-center gap-2'>
                
                <img className="w-10 h-10 object-cover object-center rounded-full cursor-pointer" src="https://imgs.search.brave.com/W0Ep6jGBogZBSLNlrx1IqJL-oxxwABizSszq3vAsgOw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQzLzEyLzM0/LzM2MF9GXzI0MzEy/MzQ2M196VG9vdWI1/NTd4RVdBQkRMazBq/SmtsRHlMU0dsMmpy/ci5qcGc" alt="Rounded avatar"/>
                <h1 className='text-sm text-gray-700 font-normal'>Marcel Sabitzer</h1>
                </div>
            </div>
       
        </div>
    </div>
  )
}

export default Topbar
