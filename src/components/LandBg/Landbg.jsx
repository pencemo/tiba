import React from "react";
import "./Landbg.css";
// import {Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Slideshow from "./SlideShow";
import { Link } from "react-router-dom";
// import img1 from '../../Images/bg1.jpg'
// import img2 from '../../Images/bg2.jpg'
// import img3 from '../../Images/bg3.png'

const img1 =
  "https://img.freepik.com/free-photo/car-driving-highway-city-sunset-side-view_1057-35834.jpg?t=st=1713939424~exp=1713943024~hmac=f9aa086eacc11ac59f2044dbbb1aed41c94466448120cfee82c55f60809634ff&w=1480";
const img2 =
  "https://img.freepik.com/free-photo/car-driving-highway-city-sunset-side-view_1057-35834.jpg?t=st=1713939424~exp=1713943024~hmac=f9aa086eacc11ac59f2044dbbb1aed41c94466448120cfee82c55f60809634ff&w=1480";
const img3 =
  "https://img.freepik.com/free-photo/car-driving-highway-city-sunset-side-view_1057-35834.jpg?t=st=1713939424~exp=1713943024~hmac=f9aa086eacc11ac59f2044dbbb1aed41c94466448120cfee82c55f60809634ff&w=1480";

function Landbg() {
  const slides = [
    {
      content: (
        <div className="slide act">
          <div className="land-bg-img img-1">
            <img src={img1} alt="" />
            <div class="gride"></div>
          </div>
          <div className="contant container ">
            <h1>We do not cook, we create your emotions!</h1>
            <p>
              Furnish your home with distinctive pieces from our furniture
              collection. Whether you're looking for a complete bedroom set,
              spacious wardrobes, comfortable sofas, or functional office
              furniture, Ghazi Homeware offers an exclusive range to suit your
              needs. Our designs combine practicality with aesthetics for a
              harmonious living experience.
            </p>
            <div className="home-btn">
              <Link className="btns2 " to="/menu">
                Book a Table
              </Link>
              <Link className="btns btns1" to="/menu">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="slide">
          <div className="land-bg-img img-1">
            <img src={img2} alt="" />
            <div class="gride"></div>
          </div>
          <div className="contant container ">
            <h1>create your emotions!</h1>
            <p>
              pieces from our furniture collection. Whether you're looking for a
              complete bedroom set, spacious wardrobes, comfortable sofas, or
              functional office furniture, Ghazi Homeware offers an exclusive
              range to suit your needs. Our designs combine practicality with
              aesthetics for a harmonious living experience.
            </p>
            <div className="home-btn">
              <Link className="btns2 " to="/menu">
                Book a Table
              </Link>
              <Link className="btns btns1" to="/menu">
                Order Now
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
            <img src={img3} alt="" />
            <div class="gride"></div>
          </div>
          <div className="contant container ">
            <h1>We do no emotions!</h1>
            <p>
              collection. Whether yous wardrobes, comfortable sofas, or
              functional office furniture, Ghazi Homeware offers an exclusive
              range to suit your needs. Our designs combine practicality with
              aesthetics for a harmonious living experience.
            </p>
            <div className="home-btn">
              <Link className="btns" to="/menu">
                Book a Car
              </Link>
              <Link className="btns" to="/menu">
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
      <div class="landing-bg">
        <Slideshow className="slideshow" slides={slides} />
      </div>
    </div>
  );
}

export default Landbg;
