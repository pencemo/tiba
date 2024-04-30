import React from 'react'
import { cars } from '../../data'

function Gallery() {
  return (
    <div className='w-full min-h-screen bg-neutral-900'>
      <div className='text-center container flex flex-col gap-2 items-center justify-end h-[340px] '>
        <h1 className='text-purple-200 text-6xl font-bold'>Gallery</h1>
        <p className='max-w-[500px] text-white font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, facilis, deserunt pariatur repudiandae nesciunt qui esse quia velit, magnoluptatem a?</p>
      </div>
      <div className='container grid grid-cols-3 max-lg:grid-cols-2 gap-4 mt-20 '>
        {cars.map((item, index)=>{
            return <div className=' relative'>
                <img key={index} src={item.url} alt="" className='w-full rounded-lg aspect-[4/3] object-cover' />
                <div className='absolute w-full h-full  rounded-lg bg-black opacity-0 bg-opacity-0 z-10 inset-0 hover:bg-opacity-70 hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center'>
                    <h1 className='text-2xl font-bold text-white'>{item.car_name}</h1>
                    <h1 className='text-sm font-normal text-white'>{item.brand} | {item.car_category}</h1>
                </div>
                </div>
        })}
      </div>
    </div>
  )
}

export default Gallery
Gallery