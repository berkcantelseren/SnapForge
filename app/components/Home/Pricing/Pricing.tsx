import PriceCard from "./PriceCard";

export default function Pricing() {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <h1 className="text-center text-2xl text-gray-800 font-bold custom-selection-3">
        Pick the Plan That Fits You Best
      </h1>
      {/* Grid Section  */}
      <div className="w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center ">
        <div>
          {/* Price Card Section  */}
          <PriceCard
            time="Monthly"
            price="10"
            desc="Get access to all our features perfect for those who prefer flexibility and lower commitment. Enjoy full access with no long term obligation, making it easy to scale as your business grows."
          />
        </div>
        <div>
          {/* Price Card Section  */}
          <PriceCard
            time="Yearly"
            price="99"
            desc="Enjoy exceptional savings with our annual subscription, granting you access to all SnapForge features for an entire year. Benefit from premium support and start your business’s growth."
          />
        </div>
        <div>
          {/* Price Card Section  */}
          <PriceCard
            time="Lifetime"
            price="349"
            desc="Unlock unlimited access to SnapForge for life! One time payment, no recurring fees, and lifetime support. Invest in your business's growth with an all inclusive plan that grows with you.
            "
          />
        </div>
      </div>
    </div>
  );
}
