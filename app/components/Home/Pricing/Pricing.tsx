import PriceCard from "./PriceCard";

export default function Pricing() {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <h1 className="text-center text-2xl text-gray-800 font-bold">
        Pick the Plan That Fits You Best
      </h1>
      {/* Grid Section  */}
      <div className="w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center ">
        <div>
          {/* Price Card Section  */}
          <PriceCard
            time="Monthly"
            price="10$"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nemo."
          />
        </div>
        <div>
          {/* Price Card Section  */}
          <PriceCard
            time="Yearly"
            price="99$"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nemo.2"
          />
        </div>
        <div>
          {/* Price Card Section  */}
          <PriceCard
            time="Lifetime"
            price="349$"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nemo.3"
          />
        </div>
      </div>
    </div>
  );
}
