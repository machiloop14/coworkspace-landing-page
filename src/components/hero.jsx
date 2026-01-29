import React from "react";
import "./hero.css";
import { MdArrowForward } from "react-icons/md";

const Hero = () => {
  return (
    <div id="container">
      {/* <img src="https://shorturl.at/D7qje" id="bg-image" /> */}
      <div id="bg-overlay"></div>
      <div id="hero-content" className="flex gap-7 flex-col">
        <h1 className="text-7xl text-white font-bold">Your Space to Thrive</h1>
        <p className="text-white/90 text-2xl">
          Join a community of innovators, creators, and entrepreneurs in our
          premium co-working spaces designed for productivity and collaboration.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 px-8 py-4 rounded-lg text-white font-semibold flex items-center gap-2">
            Book a Tour
            <MdArrowForward size={20} className="mt-1" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg text-white font-semibold ">
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
