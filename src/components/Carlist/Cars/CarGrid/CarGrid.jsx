import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

function CarGrid({filteredData, handlClickBook}) {
  return (
    <div className='grid cardStyle gap-6 px-6 max-lg:px-0'>
                {filteredData.map(item=>{
                    return<div key={item.id} className="p-2 max-w-96 mx-auto flex flex-col  border  rounded-xl bg-slate-100 border-slate-300 shadow-salt-800/70">
                    <img className=" transition-all duration-100 w-full max-w-72 h-48  object-cover rounded-t-xl" src={item.url} alt="Image Description" />
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold  text-black"> {item.car_name} </h3>
                        <h4 className="text-tremor-default text-gray-600  ">{item.brand} | {item.car_category} </h4>
                        {/* <div className='flex gap-5 my-3'>
                            <h4 className="flex items-center gap-3 text-tremor-default text-dark-tremor-content-emphasis text-uppercase "><Armchair strokeWidth={1.25} />{item.seating_capacity}</h4>
                            <h4 className="flex items-center gap-3 text-tremor-default text-dark-tremor-content-emphasis text-uppercase "><Fuel strokeWidth={1.25} />{item.type}</h4>
                        </div> */}
                        <div className=' mt-5'>
                            <div className='flex items-center w-full justify-between'>
                                <p className="text-2xl numberFont text-neutral-800 font-semibold">${item.rent_rate} <span className='text-base font-normal'>/ Day</span></p>
                                <Link to={`/cardetails/${item.car_name}`} className='flex items-center gap-1 text-blue-600 hover:text-blue-500 text-sm font-semibold'>View details <ArrowUpRight size={22} /></Link>
                            </div>
                            <button
                                onClick={()=>handlClickBook(item.id)}
                                className="mt-2 w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-700 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none" href="#">Book Now</button>
                        </div>
                    </div>
                </div>
                })}
            </div>
  )
}

export default CarGrid
