"use client";

import { useEffect } from "react";
import { About } from "./About/About";
import Faq from "./Faq/Faq";
import { Features } from "./Features/Features";
import { Hero } from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import { Reviews } from "./Reviews/Reviews";
import { Services } from "./Services/Services";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Features />
      <Services />
      <Reviews />
      <Pricing />
      <Faq />
    </div>
  );
};
