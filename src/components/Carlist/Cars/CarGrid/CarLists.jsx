import React from 'react'
import { CarFront, Calendar } from 'lucide-react'
import { PiSteeringWheelLight } from "react-icons/pi";
import { BsFuelPump } from "react-icons/bs";

function CarLists({filteredData, handlClickBook}) {
  return (
    <div className='flex flex-col gap-3'>
                {filteredData.map(item=>{
                    return<div key={item.id} className="flex flex-wrap w-full gap-8 bg-slate-100 p-3 rounded-lg shadow">
                        <img src={item.url} alt="carImage" className='w-80 aspect-[5/3] object-cover rounded-md' />
                        <div className='flex flex-col justify-around'>
                            <div>
                                <h3 className="text-3xl font-bold  text-neutral-700"> {item.car_name} </h3>
                                <h4 className="text-tremor-default text-neutral-600  ">{item.brand} | {item.car_category} </h4>
                            </div>
                            <div className='flex numberFont'>
                                <div className='flex flex-col gap-2 items-center border-r-2 pr-8' >
                                    <CarFront strokeWidth={1.25} className='text-blue-600' />
                                    <h4 className="font-semibold uppercase text-base text-neutral-900  ">{item.brand} </h4>
                                </div>
                                <div className='flex flex-col gap-2 items-center border-r-2 px-8' >
                                    <PiSteeringWheelLight size={25} className='text-blue-600' />
                                    <h4 className="font-semibold uppercase text-base text-neutral-900  ">{item.mileage} </h4>
                                </div>
                                <div className='flex flex-col gap-2 items-center border-r-2 px-8' >
                                    <BsFuelPump size={23} className='text-blue-600' />
                                    <h4 className="font-semibold uppercase text-base text-neutral-900  ">{item.type} </h4>
                                </div>
                                <div className='flex flex-col gap-2 items-center  px-8' >
                                    <Calendar strokeWidth={1.25} size={23} className='text-blue-600' />
                                    <h4 className="font-semibold uppercase text-base text-neutral-900  ">{item.year} </h4>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <button onClick={()=>handlClickBook(item.id)} className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-700 hover:bg-blue-300 disabled:opacity-50 disabled:pointer-events-none" href="#">Book Now</button>
                        </div>
                    
                </div>
                })}
            </div>
  )
}

export default CarLists
