import React from 'react'
import logo from '../../../../assets/Logo.png'
import Slider from 'react-infinite-logo-slider'
import { cars } from '../../../../data'

function FilterBar() {
  const uniqueBrand = [...new Set(cars.map(item => item.brand))];
  return (
    <div className=''>
        <div className='bg-slate-50 carListView  h-24 flex items-center justify-around'>
            <img src={logo} alt="" className='w-20'/>
            <h1 className='font-bold text-3xl'>Rent Cars</h1>
        </div>
        {/* <Slider className='overflow-hidden carListView' width="100px" duration={40} pauseOnHover={true} blurBorders={true} blurBoderColor={'#fff'}>
            
            {uniqueBrand.map((brand, index) => (
            <Slider.Slide key={index} className='py-5 mx-10'  >
                <h1 className='border whitespace-nowrap border-b-red-600 border-l-red-600 border-r-blue-600 border-t-blue-600 py-2 px-5 rounded-full '>{brand}</h1>
            </Slider.Slide>
            ))}
            
        </Slider> */}
    </div>
  )
}

export default FilterBar
