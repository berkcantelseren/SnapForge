import Image from "next/image";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

type Props = {
  image: string;
  name: string;
  rating: string;
  desc: string;
};

export const ReviewsCard = ({ image, name, rating, desc }: Props) => {
  return (
    <div className="bg-white shadow-md p-8 sm:flex items-center space-y-4 sm:space-y-0 space-x-6 rounded-lg">
      {/* Image  */}
      <div>
        <Image
          src={image}
          alt="Reviews Card Profile Picture"
          width={400}
          height={400}
          className="rounded-lg select-none"
        />
      </div>
      <div>
        <h1 className="text-lg font-bold text-gray-800 custom-selection-3">
          {name}
        </h1>
        <div className="flex items-center space-x-3">
          <p className="text-2xl font-bold text-orange-500 select-none">
            {rating}
          </p>
          <div className="flex items-center ">
            <FaStar className="w-4 h-4 text-yellow-600" />
            <FaStar className="w-4 h-4 text-yellow-600" />
            <FaStar className="w-4 h-4 text-yellow-600" />
            <FaStar className="w-4 h-4 text-yellow-600" />
            <BsStarHalf className="w-4 h-4 text-yellow-600" />
          </div>
        </div>
        <p className="mt-2 text-base text-gray-700 font-medium">{desc}</p>
      </div>
    </div>
  );
};
