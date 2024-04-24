import React from 'react'
import './LogoScroll.css'
import logo1 from '../../assets/brand/brand-logo (1).png'
import logo2 from '../../assets/brand/brand-logo (2).png'
import logo3 from '../../assets/brand/brand-logo (3).png'
import logo4 from '../../assets/brand/brand-logo (4).png'
import logo5 from '../../assets/brand/brand-logo (5).png'
import logo6 from '../../assets/brand/brand-logo (6).png'
import logo7 from '../../assets/brand/brand-logo (7).png'
import logo8 from '../../assets/brand/brand-logo (8).png'
import logo9 from '../../assets/brand/brand-logo (9).png'
import logo10 from '../../assets/brand/brand-logo (1).webp'
import logo11 from '../../assets/brand/brand-logo (2).webp'

function LogoScroll() {

  
  return (
    <div className="logos-wrap">
        <section className="container">
            <div className=" scroll-contai">
                {/* <h4 className="logo-hed">Trusted by Amazing Companie</h4> */}
                <div className="raw logoimgs">
                    <div className="logos">
                        <img src={logo1} alt="Brand Logo" />
                        <img src={logo2} alt="Brand Logo" />
                        <img src={logo3} alt="Brand Logo" />
                        <img src={logo4} alt="Brand Logo" />
                        <img src={logo5} alt="Brand Logo" />
                        <img src={logo6} alt="Brand Logo" />
                        <img src={logo7} alt="Brand Logo" />
                        <img src={logo8} alt="Brand Logo" />
                        <img src={logo9} alt="Brand Logo" />
                        <img src={logo10} alt="Brand Logo" />
                        <img src={logo11} alt="Brand Logo" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default LogoScroll
