import React from "react";
import "./Landbg.css";
import bg from "../../assets/bg1.jpg"
import bg2 from "../../assets/bg2.jpg"
import bg3 from "../../assets/bg3.jpg"
import Slideshow from "./SlideShow";
import { Link } from "react-router-dom";
// import img1 from '../../Images/bg1.jpg'
// import img2 from '../../Images/bg2.jpg'
// import img3 from '../../Images/bg3.png'

const img3 =
  "https://img.freepik.com/free-photo/car-driving-highway-city-sunset-side-view_1057-35834.jpg?t=st=1713939424~exp=1713943024~hmac=f9aa086eacc11ac59f2044dbbb1aed41c94466448120cfee82c55f60809634ff&w=1480";

function Landbg() {
  const slides = [
    
    {
      content: (
        <div className="slide ">
          <div className="land-bg-img img-1">
            <img src={bg} alt="" />
            <div className="gride"></div>
            <div className="gride2"></div>
          </div>
          <div className="contant container ">
            <h1>We do no emotions!</h1>
            <p>
              collection. Whether yous wardrobes, comfortable sofas, or
              functional office furniture, Ghazi Homeware offers an exclusive
              range to suit your needs. Our designs combine practicality with
              aesthetics for a harmonious living experience.
            </p>
            <div className="home-btn mt-6">
              <Link className="btns1" to="/menu">
                Book a Car
              </Link>
              <Link className="btns " to="/menu">
                Search a car
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="slide ">
          <div className="land-bg-img img-1">
            <img src={bg3} alt="" />
            <div className="gride"></div>
            <div className="gride2"></div>
          </div>
          <div className="contant container ">
            <h1>We do no emotions!</h1>
            <p>
              collection. Whether yous wardrobes, comfortable sofas, or
              functional office furniture, Ghazi Homeware offers an exclusive
              range to suit your needs. Our designs combine practicality with
              aesthetics for a harmonious living experience.
            </p>
            <div className="home-btn mt-6">
              <Link className="btns1" to="/menu">
                Book a Car
              </Link>
              <Link className="btns " to="/menu">
                Search a car
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="slide ">
          <div className="land-bg-img img-1">
            <img src={bg2} alt="" />
            <div className="gride"></div>
            <div className="gride2"></div>
          </div>
          <div className="contant container ">
            <h1>We do no emotions!</h1>
            <p>
              collection. Whether yous wardrobes, comfortable sofas, or
              functional office furniture, Ghazi Homeware offers an exclusive
              range to suit your needs. Our designs combine practicality with
              aesthetics for a harmonious living experience.
            </p>
            <div className="home-btn mt-6">
              <Link className="btns1" to="/menu">
                Book a Car
              </Link>
              <Link className="btns " to="/menu">
                Search a car
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="landbg">
      <div className="landing-bg">
        <Slideshow className="slideshow" slides={slides} />
      </div>
    </div>
  );
}

export default Landbg;
