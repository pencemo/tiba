import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo2.png'
import { Facebook, Instagram, MailOpen, MessageCircleMoreIcon,  } from 'lucide-react'

function Footer() {
  return (
    <div>
        {/* <!-- ========== FOOTER ========== --> */}
        <footer class="mt-auto bg-gray-900 w-full py-20">
        <div class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
            {/* <!-- Grid --> */}
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div class="col-span-full lg:col-span-2">
                <img src={logo} alt="logo" className='w-32' />
                <p className='text-gray-400 text-sm font-normal  mt-2 max-w-96 '>
                    consectetur adipisicing elit. Dolor earum quidem voluptate incidunt 
                    expedita nisi laborum voluptatem ullam officiis eaque ad, mollitia 
                    non odio in dicta nulla porro alias officia!</p>
            </div>
            {/* <!-- End Col --> */}

            <div class="col-span-1">
                <h4 class="font-semibold text-gray-100">Quick links</h4>

                <div class="mt-3 grid space-y-3">
                <p><Link  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to='/'>Home</Link></p>
                <p><Link  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to='/about'>About Us</Link></p>
                <p><Link  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to='/cars'>Car list</Link></p>
                <p><Link  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to='/gallery'>Gallery</Link></p>
                <p><Link  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to='/contact'>Contact</Link></p>
                </div>
            </div>
            {/* <!-- End Col --> */}

            <div class="col-span-1">
                <h4 class="font-semibold text-gray-100">Car brand</h4>

                <div class="mt-3 grid space-y-3">
                {/* <p><Link  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to='/Login'>Contact</Link></p> */}
                <p><Link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to="cars">Benz </Link></p>
                <p><Link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to="cars">Volvo </Link></p>
                <p><Link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to="cars">Honda</Link></p>
                <p><Link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to="cars">Ford</Link></p>
                <p><Link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to="cars">Suzuki</Link></p>
                {/* <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">BMW</a></p> */}
                </div>
            </div>
            {/* <!-- End Col --> */}

            <div class="col-span-1 max-lg:col-span-2 ">
                <h4 class="font-semibold text-gray-100">Category</h4>

                <div class="mt-3 grid space-y-3">
                <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Sedans</a></p>
                <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Hatchbacks</a></p>
                <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Van</a> <span class="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">We're hiring</span></p>
                <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Suv</a></p>
                </div>
            </div>
           
            </div>
            {/* <!-- End Grid --> */}

            <div className='mt-10 w-full h-[1px] bg-white bg-opacity-50'></div>
            <div class="mt-5 sm:mt-10 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div class="flex justify-between items-center">
                <p class="text-sm text-gray-400">© 2022 Tiba. All rights reserved.</p>
            </div>
            {/* <!-- End Col --> */}

            {/* <!-- Social Brands --> */}
            <div>
                <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                <Facebook class="flex-shrink-0 size-5" strokeWidth={1.5} />
                </a>
                <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                <Instagram class="flex-shrink-0 size-5" strokeWidth={1.5}  />
                </a>
                <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                <MailOpen class="flex-shrink-0 size-5" strokeWidth={1.5} />
                </a>
                <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                <MessageCircleMoreIcon class="flex-shrink-0 size-5" strokeWidth={1.5} />
                </a>
                
            </div>
            {/* <!-- End Social Brands --> */}
            </div>
        </div>
        </footer>
        {/* <!-- ========== END FOOTER ========== --> */}
    </div>
  )
}

export default Footer
