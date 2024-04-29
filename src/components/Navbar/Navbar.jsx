import React, {useState} from 'react'
import { NavLink, Link} from 'react-router-dom';
import {ShoppingCart} from 'lucide-react'
import './Navbar.css'
import { Spin as Hamburger } from 'hamburger-react'
import logo from '../../assets/Logo3.png'


const Navbar = () => {

  const [scroll, setScroll] =useState(false)
  const navscroll = ()=>{
    if(window.scrollY){
      setScroll(true)
    }else{
      setScroll(false)
    }
  };
  window.addEventListener("scroll", navscroll)

  const [isOpen, setOpen] = useState(false)
  const [toggle, setToggle] = useState(false)

  const navtoggle =()=>{
    setOpen(!isOpen);
    setToggle(!toggle)
  }

  return (
    <div className={`Navbar  ${scroll && 'navscroll bg-zinc-900'}`}>
      <div className='container navlink'>
        <div className="logo"><img src={logo} alt="" /></div>
        <div onClick={navtoggle} className={toggle ? 'bg bgact' : 'bg' }></div>
        <ul  className={toggle ? 'navactiv' : '' }>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/carlist'>Car List</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            
        </ul>
        <div className='navbtns'>
            {/* <ShoppingCart color={'#fff'} size={28} strokeWidth={1} /> */}
            {/* <NavLink className='sign' to='/contact'>Sign In</NavLink> */}
            <Link className='btns' to='/menu'>Order Now</Link>
          <div className="navbtn" >

          <Hamburger onToggle={toggled => {
            if (toggled) {
              setToggle(true)
            } else {
              setToggle(false)
            }
          }} toggled={isOpen} toggle={setOpen} size={26} />

        </div>
        </div>
      </div>
      <div className="container">
        <div className={`w-full h-[1px] mt-8 bg-white bg-opacity-30 ${scroll && 'hidden'}`}></div>
      </div>
    </div>
  )
}

export default Navbar
