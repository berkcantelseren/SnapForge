import { About } from "./About/About";
import { Features } from "./Features/Features";
import { Hero } from "./Hero/Hero";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Features />
    </div>
  );
};
