import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {cars} from '../data'
import { Zap, CarTaxiFront, BadgeDollarSign , ArrowLeftToLine  } from 'lucide-react';
import BookForm from '../components/Carlist/Cars/BookForm';

function CarDetails() {

    const [bookForm, setBookForm] = useState(false);
    const [product, setproduct] = useState();

    const handlClickBook= (id)=>{
        const filter= cars.filter(items => items.id === id)
        setBookForm(true)
        setproduct(filter)
    }



    const {carName} = useParams()
    const [carDetails, setCarDetails] = useState([])
    const month = carDetails.rent_rate*30
    
    useEffect(()=>{
        const filter= cars.filter(items => items.car_name === carName)
        setCarDetails(filter[0])
    }, [carName]);

    if (!carDetails) {
        return <p>Loading...</p>;
    }

  return (
    <div className='flex flex-col w-full min-h-screen  justify-center '>
        <div className='max-w-[85rem] mx-auto relative bg-slate-100 grid grid-cols-2 max-md:grid-cols-1 px-10 py-10 gap-10'>
            <Link className='absolute top-[-35px] flex items-center gap-2 font-semibold ' to='/carlist'><ArrowLeftToLine strokeWidth={1} />Go Back</Link>
            
            <img src={carDetails.url}  className=' object-cover aspect-[4/3] rounded-lg' alt="" />
            <div className='flex flex-col justify-between'>
                <div>
                    <h1 className='text-3xl font-semibold text-neutral-800'>{carDetails.car_name}</h1>
                    <h1 className='text-lg font-light text-neutral-700'>{carDetails.brand} | {carDetails.car_category}</h1>
                </div>
                <div className='flex flex-wrap mt-6 numberFont'>
                    <h1 className='flex items-center gap-2 text-base font-medium pr-4 border-r border-r-neutral-900'><CarTaxiFront  strokeWidth={1}/> {carDetails.car_category}</h1>
                    <h1 className='flex items-center gap-2 text-base font-medium px-4 border-r border-r-neutral-900'><Zap strokeWidth={1}/> {carDetails.type}</h1>
                    <h1 className='flex items-center gap-2 text-base font-medium px-4 '><BadgeDollarSign  strokeWidth={1}/> {carDetails.mileage}</h1>
                </div>
                <div className='mt-5'>
                    <h1 className='font-bold text-xl text-neutral-800'>This is an amazing car</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta itaque distinctio aperiam consequuntur corporis odio quasi ullam exercitationem</p>
                </div>
                <div className='flex gap-4 numberFont mt-4'>
                    <h1 className='flex items-center gap-2 text-2xl font-semibold text-neutral-900 '>$ {carDetails.rent_rate} <span className='font-medium text-xl'>/Day</span></h1>
                    <h1 className='flex items-center gap-2 text-2xl font-semibold text-neutral-900 '>$ {month} <span className='font-medium text-xl'>/Day</span></h1>
                </div>
                <button
                    onClick={()=>handlClickBook(carDetails.id)}
                    className="mt-9 w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 ">Book Now</button>
            </div>
        </div>
        {bookForm && <BookForm data={bookForm} data2={setBookForm} carData={product}/>}
    </div>
  )
}

export default CarDetails
