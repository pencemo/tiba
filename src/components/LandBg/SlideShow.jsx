import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Facebook, Instagram, Mail, MessageCircle } from 'lucide-react';

function Slideshow({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
//   setInterval(prev, 1000);

  return (
    <div className="slideshow">
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === index ? 'act' : ''}`}>
          {slide.content}
        </div>
      ))}
      
      <div className="next-pvr-btn">
            <button className="prev slide-btn" onClick={prev}><ChevronLeft  size={30} strokeWidth={0.75} /></button>
            <div className="line"></div>
            <button className="next slide-btn" onClick={next}><ChevronRight  size={30} strokeWidth={0.75} /></button>
        </div>
        <div className="scial-icon container ">
          {/* <div className='icon-wrap'>
          <p>Folow Us</p>
          <div className="follow"></div>
            <a href="https://www.facebook.com/"><Facebook size={21} strokeWidth={1} /></a>
            <a href="https://www.instagram.com/"><Instagram size={21} strokeWidth={1} /></a>
            <a href="mailto:mghazitrading@gmail.com"><Mail size={21} strokeWidth={1} /></a>
            <a href="https://wa.me/+971543266421"><MessageCircle size={21} strokeWidth={1} /></a>
          </div> */}
          {/* <h1 className="text-white">Muhammed Niyas</h1> */}
          

            <div class="w-80 bg-white flex flex-col items-center px-10 py-20 rounded-3xl mr-32">
              <div class="mb-5 w-full">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-5 w-full">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div class="mb-5 w-full">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>

        </div>
        
        
        
    </div>
  );
}

export default Slideshow;
