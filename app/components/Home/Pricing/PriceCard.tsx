type Props = {
  time: string;
  price: string;
  desc: string;
};

export default function PriceCard({ time, price, desc }: Props) {
  return (
    <div className="bg-white rounded-lg p-8 relative border-t-4 border-[#800020]">
      <h1 className="text-gray-800 font-bold text-xl">{time} Membership</h1>
      <p className="mt-4 text-gray-600 font-medium">{desc}</p>
      <div className="mt-8 ">
        <div className="text-gray-700 font-semibold text-lg">
          <span className="text-4xl font-bold text-black">${price}</span>
        </div>
      </div>
    </div>
  );
}
