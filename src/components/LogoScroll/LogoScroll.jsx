import React from 'react'
import Slider from 'react-infinite-logo-slider'
import logo1 from '../../assets/brand/brand-logo (1).png'
import logo2 from '../../assets/brand/brand-logo (2).png'
import logo3 from '../../assets/brand/brand-logo (3).png'
import logo4 from '../../assets/brand/brand-logo (4).png'
import logo5 from '../../assets/brand/brand-logo (5).png'
import logo6 from '../../assets/brand/brand-logo (6).png'
import logo7 from '../../assets/brand/brand-logo (7).png'
import logo8 from '../../assets/brand/brand-logo (8).png'
import logo9 from '../../assets/brand/brand-logo (9).png'
// import logo10 from '../../assets/brand/brand-logo (1).webp'
// import logo11 from '../../assets/brand/brand-logo (2).webp'
import logo12 from '../../assets/brand/brand-logo (12).png'
import logo13 from '../../assets/brand/brand-logo (10).png'
import logo14 from '../../assets/brand/brand-logo (11).png'
import logo15 from '../../assets/brand/brand-logo-(13).png'

function LogoScroll() {

    const logos=[logo1, logo2, logo9, logo3, logo4, logo5, logo14, logo7, logo8, logo6, logo12, logo13, logo15,]
  
  return (
    
    <div className=' bg-neutral-900'>
    <div className=' h-auto container'>
        <Slider className='' width="200px" duration={40} pauseOnHover={true} blurBorders={true} blurBoderColor={'rgb(23, 23, 23)'}>
            
            {logos.map((logo, index) => (
            <Slider.Slide key={index} className=' py-20'  >
                <img  src={logo} alt="any" className='w-28 h-28 object-contain grayscale hover:grayscale-0 cursor-pointer ' />
            </Slider.Slide>
            ))}
            
        </Slider>
    </div>
    </div>
)}

export default LogoScroll
