import { About } from "./About/About";
import { Hero } from "./Hero/Hero";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
    </div>
  );
};
