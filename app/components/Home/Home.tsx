import { About } from "./About/About";
import Faq from "./Faq/Faq";
import { Features } from "./Features/Features";
import { Hero } from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import { Reviews } from "./Reviews/Reviews";
import { Services } from "./Services/Services";

export const Home = () => {
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
