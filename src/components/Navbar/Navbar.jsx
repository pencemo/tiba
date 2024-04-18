import React, {useState} from 'react'
import { NavLink, Link} from 'react-router-dom';
import './Navbar.css'
import { Spin as Hamburger } from 'hamburger-react'
import logo from '../../assets/Logo.png'


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
    <div className={scroll ? 'Navbar navscroll ' : 'Navbar '}>
      <div className='navlink container'>
        <div className="logo"><img src={logo} alt="" /></div>
        <div onClick={navtoggle} className={toggle ? 'bg bgact' : 'bg' }></div>
        <ul  className={toggle && 'navactiv' }>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/menu'>Menu</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <div className="nav-logo">
              <img src="./assets/logo.png" alt="" />
              <p>NeptuneMark Near Markaz Knowledge City, Calcut, Kerala - 673586</p>
              <h4 className='fonts'>+91 8590 30 50 60</h4>
              <h4>neptunemarkindia@gmail</h4>
              <Link className='btns btn-nav' to='/menu'>Order Now</Link>
            </div>
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
    </div>
  )
}

export default Navbar
