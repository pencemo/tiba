import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft} from "lucide-react";
import SearchCar from "./SearchCar";

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
        <div key={i} className={`slide ${i === index ? "act" : ""}`}>
          {slide.content}
        </div>
      ))}

      <div className="buttonDiv absolute bottom-24 w-[100%] flex flex-col gap-10">
        <SearchCar/>

        <div className="next-pvr-btn">
          <button className="prev slide-btn" onClick={prev}>
            <ChevronLeft size={30} strokeWidth={0.75} />
          </button>
          <div className="line"></div>
          <button className="next slide-btn" onClick={next}>
            <ChevronRight size={30} strokeWidth={0.75} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
