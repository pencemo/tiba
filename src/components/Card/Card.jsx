import React from 'react'
import { Fuel, Armchair } from 'lucide-react';
import  { cars } from '../../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Card() {
  return (
    <div className=' bg-neutral-900 py-20'>
        <div className='container'>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation,]}
        className="mySwiper flex items-center justify-center w-full py-10"
      >
        {cars.map((item)=>{
            return <SwiperSlide key={item.id} className=''>
                <div class=" max-w-80 mx-auto flex flex-col  border shadow-sm rounded-xl bg-neutral-800 border-neutral-700 dark:shadow-neutral-700/70">
                    <img class=" w-full h-56 object-cover rounded-t-xl" src={item.url} alt="Image Description" />
                    <div class="p-4 md:p-5">
                        <h3 class="text-lg font-bold  text-white"> {item.car_name} </h3>
                        <h4 className="text-tremor-default text-gray-300  ">{item.brand} | {item.car_category} </h4>
                        <div className='flex gap-5 my-3'>
                            <h4 className="flex items-center gap-3 text-tremor-default text-dark-tremor-content-emphasis text-uppercase "><Armchair strokeWidth={1.25} />{item.seating_capacity}</h4>
                            <h4 className="flex items-center gap-3 text-tremor-default text-dark-tremor-content-emphasis text-uppercase "><Fuel strokeWidth={1.25} />{item.type}</h4>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className="text-2xl numberFont text-dark-tremor-content-strong font-semibold">$ {item.rent_rate}</p>
                            <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none" href="#">Book Now</a>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
        })}
      </Swiper>
        </div>
    </div>
  )
}

export default Card
