import { About } from "./About/About";
import { Features } from "./Features/Features";
import { Hero } from "./Hero/Hero";
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
    </div>
  );
};
