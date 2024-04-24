
import React, {useContext, useEffect, useState} from 'react'
import PopUp from './PopUp';
import Topbar from '../SlidBar/Topbar';
import { Trash2, SquareArrowOutUpRight, Info, Check, Search } from 'lucide-react';
import  { tabel } from '../../../data'



import { AuthService } from "../../../firebase/auth_services/auth_service";
import { useLoading } from "../../../contexts/loading_state_context";
import { UserDBServices } from "../../../firebase/database_services/user_db";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/user_context";
import { UserModel } from "../../../models/user_model";



function Order() {

  const [open, setOpen] =useState(false)
  const [productId, setProductId] =useState()
  const [search, setSearch] =useState('')
  const [select, setSelect] =useState('')
  console.log(select);


  const authInstance = new AuthService();
  const userDBInstance = new UserDBServices();

  const navigate = useNavigate();
  const location = useLocation();
  const { userValue, updateUserValue } = useContext(UserContext);
  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      authInstance.isAuthenticated().then(async (isAuthenticated) => {
        if (isAuthenticated) {
          const email = authInstance.getCurrentUserEmail();
          const userModel = await userDBInstance.getUser(email);

          if (userModel != null) {
            updateUserValue(
              new UserModel(
                userModel.email,
                userModel.password,
                userModel.name,
                userModel.role
              )
            );
          }

          navigate(location.pathname);
        } else {
          updateUserValue(null);
          navigate("/login");
        }
        setLoading(false);
      });
    }, 1000);
  }, [1]);

  const handlClick = (id)=>{
      const filtert= tabel.filter(items => items.id === id)
    //   console.log(filtered);
    setProductId(filtert)
    setOpen(!open)
  }

  const searchFilter=(data)=>{
     return data.filter(
        (item)=>
            item.brand.toLowerCase() === select.toLowerCase() ||
            // item.brand.toLowerCase().includes(search) ||
            item.name.toLowerCase().includes(search)
    )
  }
  
  const data=searchFilter(tabel)

  return (
    <div className='min-width flex flex-col min-h-full absolute right-0  max-lg:px-2 px-10 bg-slate-200'>
      <Topbar title={"Order Manage"}/>

      <div className="p-8 px-16 max-lg:px-2 my-36 mx-auto bg-white relative overflow-x-auto shadow-md rounded-lg ">
          <div className="flex mt-6 flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
              
              <label  className="sr-only">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" strokeWidth={1.25} />
                  </div>
                  <input onChange={(e)=>setSearch(e.target.value)} type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
              </div>
               <div className='flex items-center justify-center'>
               <select onChange={(e)=>setSelect(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value='' >Select a Category</option>
                    {/* <option value="US">United States</option> */}
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Lenovo">Lenovo</option>
                </select>

              {/* <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Add to cart
              </button> */}
               </div>
          </div>
          <table className="w-full mt-3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="p-4">
                          <div className="flex items-center">
                              <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                          </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Product name
                      </th>
                      <th scope="col" className="px-12 py-3">
                          Color
                      </th>
                      <th scope="col" className="px-12 py-3">
                          Category
                      </th>
                      <th scope="col" className="px-12 py-3">
                          Status
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
                  {data.map(items=>{
                    return<tr key={items.id}  className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {items.name}
                    </th>
                    <td className="px-12 py-4">
                      {items.color}
                    </td>
                    <td className="px-12 py-4">
                    {items.brand}
                    </td>
                    <td className="px-12 py-4">
                      {items.status ? <span className="flex items-center gap-1 bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      <Info size={14} strokeWidth={1.5} />
                        Pending
                      </span> : <span className="flex items-center gap-1 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      <Check size={14} strokeWidth={1.5} />
                        Green
                        </span>}
                    </td>
                    
                    <td className="px-12 py-4">
                        <h4 onClick={()=>handlClick(items.id)} className="cursor-pointer flex items-center gap-2 p-1 px-2 rounded-md font-semibold text-blue-600 dark:text-blue-500 hover:underline hover:bg-slate-200">View <SquareArrowOutUpRight size={22} strokeWidth={1.25} /></h4>
                    </td>
                    <td className="px-12 py-4">
                        <h4 className="cursor-pointer flex items-center gap-2 p-1 px-2 rounded-md font-semibold text-blue-600 dark:text-blue-500 hover:underline hover:bg-slate-200">Delete <Trash2 strokeWidth={1.25} /></h4>
                    </td>
                </tr>}

                  )}
              </tbody>
          </table>
      </div>
      {open && <PopUp data={open} data2={setOpen} product={productId} />}


    </div>
  );
}

export default Order;
