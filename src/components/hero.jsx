import React from "react";
import { LuArrowRight } from "react-icons/lu";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.from(".bg-backdrop", {
      backgroundColor: "#000",
      // opacity: 0.5,
      duration: 1,
    });

    // gsap.from(".cta-btns", {
    //   y: "100%",
    //   duration: 0.5,
    // });

    gsap.from(".hero-content", {
      opacity: 0,
      duration: 0.5,
    });
  });

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3Njk1MDU5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern coworking space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 bg-backdrop"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl hero-content">
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Your Space to Thrive
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Join a community of innovators, creators, and entrepreneurs in our
            premium co-working spaces designed for productivity and
            collaboration.
          </p>
          <div className="flex flex-wrap gap-4 cta-btns">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors">
              Book a Tour
              <LuArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-lg transition-colors">
              View Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
