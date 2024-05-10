import React, {useState} from 'react'
import { cars } from '../../../data'
// import { Armchair, Fuel } from 'lucide-react'
import { Select, SelectItem, Divider  } from '@tremor/react';
import BookForm from './BookForm';
import { SlidersHorizontal, ChevronDown, LayoutGrid, LayoutList, CarFront, Calendar , Search  } from 'lucide-react';
import { PiSteeringWheelLight, PiPoliceCarLight  } from "react-icons/pi";
import { BsFuelPump } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";




function Cars() {

    const [car_category, setCar_category] = useState('');
    const [brand, setBrand] = useState([]);
    const [fuel, setFuel] = useState('');
    const [selectAll, setSelectAll] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const [searchQuery, setSearchQuery] = useState('');
    const [bookForm, setBookForm] = useState(false);
    const [product, setproduct] = useState();

    const [iscDrop, setCDrop] = useState(false);
    const [isbDrop, setBDrop] = useState(true);
    const [isGrid, setGrid] = useState(false);
    const [isFilterBox, setFilterBox] = useState(false);

    // brand filter handle 
    const handleCheckboxChange = (item) => {
        if (brand.includes(item)) {
          setBrand(brand.filter((c) => c !== item));
        } else {
          setBrand([...brand, item]);
        }
      };

    // brand all select filter 
      const handleSelectAllChange = () => {
        if (selectAll) {
          setBrand([]);
        } else {
          setBrand(cars.map((car) => car.brand)); 
        }
        setSelectAll(!selectAll);
      };

    // all filter data 
    const filteredData = cars.filter(item => {
        const rent = parseInt(item.rent_rate); 
        return (car_category === '' || item.car_category === car_category) &&
            //    (brand === '' || item.brand === brand) &&
            (brand.length === 0 || brand.includes(item.brand)) &&
            (fuel === '' || item.type === fuel) &&
            (searchQuery === '' || item.car_name.toLowerCase().includes(searchQuery.toLowerCase())) &&
            (rent >= minPrice && rent <= maxPrice)
    });

    const uniqueCategories = [...new Set(cars.map(item => item.car_category))];
    const uniqueBrand = [...new Set(cars.map(item => item.brand))];
    const uniqueFuletype = [...new Set(cars.map(item => item.type))];

    // book form handle
    const handlClickBook= (id)=>{
        const filter= cars.filter(items => items.id === id)
        setBookForm(true)
        setproduct(filter)
    }

  return (
    
    <div className='px-5 bg-white h-auto flex gap-5 w-full'>
        <div className="carListView">
            <div className='flex w-full gap-3 mb-6 items-center mt-10'>
                <div className='w-full  flex items-center gap-6 '>

                    <div className='relative w-full '>
                        <Search  className='absolute top-[50%] translate-y-[-50%] left-5 text-gray-500' strokeWidth={1.2} size={26} />
                        <input onChange={e => setSearchQuery(e.target.value)} type="text"
                        className="py-3 px-4 pl-16 placeholder:font-normal block w-full border-gray-200 rounded-lg text-lg font-semibold text-neutral-800 focus:border-blue-500 focus:ring-blue-500 bg-gray-100" placeholder="Search..."></input>
                    </div>
                    <div className='flex gap-4 max-lg:hidden'>
                        <LayoutGrid onClick={()=>{setGrid(true)}} strokeWidth={1.5} className='text-neutral-500 border border-neutral-400 rounded-lg cursor-pointer w-10 h-10 p-1' />
                        <LayoutList onClick={()=>{setGrid(false)}} strokeWidth={1.5} className='text-neutral-500 border border-neutral-400 rounded-lg cursor-pointer w-10 h-10 p-1' />
                    </div>

                </div>
                <div className='lg:hidden hover:bg-slate-50 p-2 ' onClick={()=>setFilterBox(!isFilterBox)}>
                    <SlidersHorizontal />
                </div>
            </div>
            
        
        
            {isGrid ? <div className='grid cardStyle gap-6'>
                {filteredData.map(item=>{
                    return<div key={item.id} className="p-2 max-w-96 mx-auto flex flex-col  border shadow-sm rounded-xl bg-slate-100 border-neutral-100 shadow-salt-800/70">
                    <img className="hover:scale-105 transition-all duration-100 w-full max-w-72 h-48  object-cover rounded-t-xl" src={item.url} alt="Image Description" />
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold  text-black"> {item.car_name} </h3>
                        <h4 className="text-tremor-default text-gray-600  ">{item.brand} | {item.car_category} </h4>
                        {/* <div className='flex gap-5 my-3'>
                            <h4 className="flex items-center gap-3 text-tremor-default text-dark-tremor-content-emphasis text-uppercase "><Armchair strokeWidth={1.25} />{item.seating_capacity}</h4>
                            <h4 className="flex items-center gap-3 text-tremor-default text-dark-tremor-content-emphasis text-uppercase "><Fuel strokeWidth={1.25} />{item.type}</h4>
                        </div> */}
                        <div className='flex items-center justify-between mt-5'>
                            <p className="text-2xl numberFont text-neutral-600 font-bold">${item.rent_rate} <span className='text-base font-normal'>/ Day</span></p>
                            <button onClick={()=>handlClickBook(item.id)} className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-700 hover:bg-blue-300 disabled:opacity-50 disabled:pointer-events-none" href="#">Book Now</button>
                        </div>
                    </div>
                </div>
                })}
            </div> : <div className='flex flex-col gap-3'>
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
            </div>}
        </div>

        {/* filete section */}

        <div className={` ${isFilterBox ? 'max-lg:right-0' : 'max-lg:right-[-400px] max-sm:right-[-500px]'} z-50 transition-all duration-300 fixed w-96 max-sm:w-full h-screen overflow-y-auto scrollbar-w-8 scrollbar scrollbar-thumb-slate-300 right-0 top-0 shadow-md bg-white p-8` }>
            <div className='flex items-center justify-between  text-neutral-400 border-b pb-2 mb-6'>
                <h1 className='font-medium text-lg numberFont'>Filter Cars <span className='text-neutral-600 font-bold '>{filteredData.length} </span></h1>
                <SlidersHorizontal strokeWidth={1.5} onClick={()=>setFilterBox(!isFilterBox)} className='max-lg:text-black' />
            </div>
            <div className='flex gap-3 my-4 lg:hidden items-center bg-slate-100 p-1 rounded-md'>
                        <LayoutGrid onClick={()=>{setGrid(true)}} strokeWidth={1.5} className='text-neutral-600  rounded-lg cursor-pointer w-10 h-10 p-1' />
                        <LayoutList onClick={()=>{setGrid(false)}} strokeWidth={1.5} className='text-neutral-600  rounded-lg cursor-pointer w-10 h-10 p-1' />
                        <h1 className='font-medium text-lg'>Layout view</h1>
                    </div>

            {/* Filter Category */}
            
            <div className=''>
                <h1 onClick={()=>setCDrop(!iscDrop)}
                    className='cursor-pointer font-semibold text-lg text-neutral-700 my-2 flex items-center justify-between'>
                    <span className='flex items-center gap-2'><PiPoliceCarLight />  Category</span>
                    <ChevronDown strokeWidth={1.5} />
                </h1>
                <div className={` ${iscDrop ? 'h-0' : 'pt-1 h-48' }  transition-all duration-300 border-b px-2  overflow-hidden`}>
                    <div className="flex ">
                        <input 
                            value=''
                            onChange={(e)=>{setCar_category(e.target.value)}}
                            type="radio" name='category' className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600" id='allCars' />
                        <label htmlFor='allCars' className="text-sm text-gray-500 ms-3 ">All</label>
                    </div>
                    {uniqueCategories.map((item, index)=>{
                        return<div className="flex py-1" key={index}>
                        <input 
                            value={item}
                            onChange={(e)=>{setCar_category(e.target.value)}}
                            type="radio" name='category' className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600" id={item} />
                        <label htmlFor={item} className="text-sm text-gray-500 ms-3 ">{item}</label>
                    </div>
                    })}
                    
                </div>
            </div>

            {/* Filter uniqueBrand */}

            <div className='mt-2'>
                <h1 onClick={()=>setBDrop(!isbDrop)}
                    className='cursor-pointer   font-semibold text-lg text-neutral-700 my-3 flex items-center justify-between'>
                    <span className='flex items-center gap-2'><PiSteeringWheelLight />  Brand</span>
                    <ChevronDown strokeWidth={1.5} />
                </h1>
                <div className={`${isbDrop ? 'h-0' : 'pt-1 h-[520px]'} transition-all duration-300  px-2 overflow-hidden border-b`}>
                    <div className="flex  ">
                        <input 
                            value=''
                            checked={selectAll}
                            onChange={handleSelectAllChange}
                            type="checkbox" name='brand' className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600" id='allCars' />
                        <label htmlFor='allCars' className="text-sm text-gray-500 ms-3 ">All</label>
                    </div>
                    {uniqueBrand.map((item, index)=>{
                        return<div className="flex py-1" key={index}>
                        <input 
                            value={item}
                            checked={brand.includes(item)}
                            onChange={()=>handleCheckboxChange(item)}
                            type="checkbox" name='brand' className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600" id={item} />
                        <label htmlFor={item} className="text-sm text-gray-500 ms-3 ">{item}</label>
                    </div>
                    })}
                    
                </div>
            </div>

            {/* Filter uniqueBrand */}

            <div className='mt-3'>
                <Select  defaultValue="" placeholder='Fuel Type' onValueChange={setFuel}>
                <SelectItem value="">All</SelectItem>
                {uniqueFuletype.map((item, index)=>{
                        return<SelectItem key={index} value={item}>{item}</SelectItem>
                    })}
                </Select>
            </div>

            {/* Filter Rent Rate  */}

            <div className='mt-5'>
                <h1 
                    className='font-semibold text-lg text-neutral-700 my-3 flex items-center justify-between'>
                    <span className='flex items-center gap-2'><IoDiamondOutline strokeWidth={.5} />Rent rate</span>
                    {/* <ChevronDown strokeWidth={1.5} /> */}
                </h1>
                <div className='relative'>
                    <label htmlFor="default-range" className="block mb-1 text-sm font-medium text-gray-900 ">Minimum</label>
                    <h1 className="absolute right-0 top-0 text-base numberFont font-medium text-gray-900 ">{minPrice}</h1>
                    <input
                        min={0}
                        max={50}
                        onChange={(e)=>setMinPrice(parseInt(e.target.value))}
                        value={minPrice}
                        id="default-range" type="range"  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>    
                
                <div className='relative'>
                    <label htmlFor="max-range" className="block mb-1 mt-4 text-sm font-medium text-gray-900 ">Maximum</label>
                    <h1 className="absolute right-0 top-0 text-base numberFont font-medium text-gray-900 ">{maxPrice}</h1>
                    <input
                        min={50}
                        max={100}
                        onChange={(e)=>setMaxPrice(parseInt(e.target.value))}
                        value={maxPrice}
                        id="max-range" type="range"  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
            </div>




           

        </div>


        {bookForm && <BookForm data={bookForm} data2={setBookForm} carData={product}/>}
    </div>
  )
}

export default Cars
