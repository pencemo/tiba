import React, {useState} from 'react'
import { cars } from '../../../data'
// import { Armchair, Fuel } from 'lucide-react'
import { Select, SelectItem } from '@tremor/react';
import BookForm from './BookForm';

function Cars() {

    const [car_category, setCar_category] = useState('');
    const [brand, setBrand] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [bookForm, setBookForm] = useState(false);
    const [product, setproduct] = useState();

 const filteredData = cars.filter(item => {
    return (car_category === '' || item.car_category === car_category) &&
           (brand === '' || item.brand === brand) &&
           (searchQuery === '' || item.car_name.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const uniqueCategories = [...new Set(cars.map(item => item.car_category))];
  const uniqueBrand = [...new Set(cars.map(item => item.brand))];

  const handlClickBook= (id)=>{
    const filter= cars.filter(items => items.id === id)
    setBookForm(true)
    setproduct(filter)
  }

  return (
    
    <div className='py-20 bg-neutral-950'>
        <div className="container ">
            <div className='grid grid-cols-3 max-lg:grid-cols-1  gap-3 bg-white px-20 py-10 rounded-xl my-20'>
                
                
                <Select  defaultValue="Category" onValueChange={setBrand}>
                <SelectItem value="">Category</SelectItem>
                    {uniqueBrand.map((item, index)=>{ 
                        return<SelectItem key={index} value={item}>{item}</SelectItem>
                    })}
                    
                </Select>
                <Select  defaultValue="" onValueChange={setCar_category}>
                <SelectItem value="">all</SelectItem>
                {uniqueCategories.map((item, index)=>{
                        return<SelectItem key={index} value={item}>{item}</SelectItem>
                    })}
                </Select>
                <input onChange={e => setSearchQuery(e.target.value)} type="text" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-200" placeholder="Search..."></input>
            </div>
        
            {/* <h1 className='text-white text-4xl font-semibold'>Rent Cars</h1> */}
        
            <div className='flex flex-wrap items-center justify-center gap-10'>
                {filteredData.map(item=>{
                    return<div key={item.id} className="p-2 max-w-80 mx-auto flex flex-col  border shadow-sm rounded-xl bg-neutral-800 border-neutral-700 dark:shadow-neutral-700/70">
                    <img className=" w-full max-w-72 h-48  object-cover rounded-t-xl" src={item.url} alt="Image Description" />
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold  text-white"> {item.car_name} </h3>
                        <h4 className="text-tremor-default text-gray-300  ">{item.brand} | {item.car_category} </h4>
                        {/* <div className='flex gap-5 my-3'>
                            <h4 className="flex items-center gap-3 text-tremor-default text-dark-tremor-content-emphasis text-uppercase "><Armchair strokeWidth={1.25} />{item.seating_capacity}</h4>
                            <h4 className="flex items-center gap-3 text-tremor-default text-dark-tremor-content-emphasis text-uppercase "><Fuel strokeWidth={1.25} />{item.type}</h4>
                        </div> */}
                        <div className='flex items-center justify-between mt-5'>
                            <p className="text-2xl numberFont text-neutral-300 font-medium">$ {item.rent_rate} <span className='text-base font-normal'>/ Day</span></p>
                            <button onClick={()=>handlClickBook(item.id)} className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-700 hover:bg-blue-300 disabled:opacity-50 disabled:pointer-events-none" href="#">Book Now</button>
                        </div>
                    </div>
                </div>
                })}
            </div>
        </div>
        {bookForm && <BookForm data={bookForm} data2={setBookForm} carData={product}/>}
    </div>
  )
}

export default Cars
