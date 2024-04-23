
import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutGrid, CarFront, Layers2, Settings, ContactRound, UserRoundCog, LogOut, X } from 'lucide-react';
import logo2 from "../../../assets/Logo2.png"
import './Slidbar.css'
import { Togglecontext } from '../../../pages/Admin';


function Slidebar({ isAdmin }) {
  const {toggle, setToggle} =useContext(Togglecontext)
      // const [toggle, setToggle]= useState(false)
      console.log(toggle);
  return (
    <div className={toggle ? "transition-all duration-300 z-10 fixed bg-indigo-600 w-72 left-0 top-0 max-lg:left-[-300px] h-screen pl-6 flex gap-2 flex-col  text-white" : "transition-all duration-300 z-10 fixed bg-indigo-600 w-72 left-0 top-0 max-lg:left-0 h-screen pl-6 flex gap-2 flex-col  text-white"}>
      <img src={logo2} alt="" className='w-32 mt-8' />
      <X onClick={()=>setToggle(!toggle)} strokeWidth={1.25} size={30} className='hidden max-lg:flex absolute right-12 top-14 cursor-pointer hover:bg-white hover:text-indigo-600 rounded-full p-1' />
      <NavLink to="dashboard" className='hover:bg-indigo-700 mt-24 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6'>
        <LayoutGrid size={26} strokeWidth={1.5} /> <span className='text-lg font-medium'>Dashbord</span>

      </NavLink>
      <NavLink
        to="order"
        className="hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6"
      >
        <Layers2 size={26} strokeWidth={1.5} />{" "}
        <span className="text-lg font-medium">All Orders</span>
      </NavLink>
      <NavLink
        to="manage-car"
        className="hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6"
      >
        <CarFront size={26} strokeWidth={1.5} />{" "}
        <span className="text-lg font-medium">Manage Cars</span>
      </NavLink>
      {(
        <NavLink
          to="manage-admin"
          className="hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6"
        >
          <UserRoundCog size={26} strokeWidth={1.5} />{" "}
          <span className="text-lg font-medium">Manage Admin</span>
        </NavLink>
      )}
      <NavLink
        to="settings"
        className="hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6"
      >
        <Settings size={26} strokeWidth={1.5} />{" "}
        <span className="text-lg font-medium">Settings</span>
      </NavLink>
      <NavLink
        to="enquiries"
        className="hover:bg-indigo-700 w-[90%] rounded-md p-2 flex gap-4 align-middle pl-6"
      >
        <ContactRound size={26} strokeWidth={1.5} />{" "}
        <span className="text-lg font-medium">Enquiries</span>
      </NavLink>
      <div className="line w-[90%] h-[1px] bg-indigo-300 mt-36"></div>
      <div className="cursor-pointer hover:bg-indigo-700 w-[90%] mt-10 rounded-md p-2 flex gap-4 align-middle pl-6">
        <LogOut size={26} strokeWidth={1.5} />{" "}
        <span className="text-lg font-medium">LogOut</span>
      </div>
    </div>
  );
}

export default Slidebar;
