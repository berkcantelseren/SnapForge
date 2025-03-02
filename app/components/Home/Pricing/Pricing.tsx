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
          <PriceCard time="Monthly Membership" price="10$" />
        </div>
        <div>
          {/* Price Card Section  */}
          <PriceCard time="Yearly Membership" price="99$" />
        </div>
        <div>
          {/* Price Card Section  */}
          <PriceCard time="Lifetime Membership" price="349$" />
        </div>
      </div>
    </div>
  );
}
