import React, {useState} from 'react'
import { cars } from '../../../data'
import { Select, SelectItem } from '@tremor/react';
import BookForm from './BookForm';
import { SlidersHorizontal, ChevronDown, LayoutGrid, LayoutList, Search } from 'lucide-react';
import { PiSteeringWheelLight, PiPoliceCarLight  } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import CarGrid from './CarGrid/CarGrid';
import CarLists from './CarGrid/CarLists';




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
    const [isGrid, setGrid] = useState(true);
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
                        <div className='absolute right-2 top-[50%] translate-y-[-50%] lg:hidden hover:bg-slate-50 p-1 ' onClick={()=>setFilterBox(!isFilterBox)}>
                            <SlidersHorizontal />
                        </div>
                        <input onChange={e => setSearchQuery(e.target.value)} type="text"
                        className="py-3 px-4 pl-16 max-sm:py-2 placeholder:font-normal block w-full border-gray-200 rounded-lg text-lg font-semibold text-neutral-800 focus:border-blue-500 focus:ring-blue-500 bg-gray-100" placeholder="Search..."></input>
                    </div>
                    <div className='flex gap-4 max-lg:hidden'>
                        <LayoutGrid onClick={()=>{setGrid(true)}} strokeWidth={1.5} className='text-neutral-500 border border-neutral-400 rounded-lg cursor-pointer w-10 h-10 p-1' />
                        <LayoutList onClick={()=>{setGrid(false)}} strokeWidth={1.5} className='text-neutral-500 border border-neutral-400 rounded-lg cursor-pointer w-10 h-10 p-1' />
                    </div>

                </div>
            </div>
            
        
            {isGrid ? <CarGrid filteredData={filteredData} handlClickBook={handlClickBook}/>
            : <CarLists filteredData={filteredData} handlClickBook={handlClickBook} />}
            
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
