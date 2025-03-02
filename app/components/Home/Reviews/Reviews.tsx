import { ReviewsCard } from "./ReviewsCard";

export const Reviews = () => {
  return (
    <div className="pt-16 pb-16 bg-[#f4f4f4]">
      <h1 className="text-center text-2xl font-bold text-gray-800 custom-selection-3">
        See What Our Clients Say
      </h1>
      <p className="mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto">
        Learn how businesses of all sizes streamline their processes, reduce
        workload, and achieve growth with SnapForge.
      </p>
      {/* Grid Section  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto">
        <div>
          <ReviewsCard image="/images/card1.jpg" name="Mark Lee" rating="4.7" />
        </div>
        <div>
          <ReviewsCard
            image="/images/card2.jpg"
            name="Zoe Smith"
            rating="4.5"
          />
        </div>
        <div>
          <ReviewsCard
            image="/images/card3.jpg"
            name="Jacob Hill"
            rating="4.9"
          />
        </div>
        <div>
          <ReviewsCard
            image="/images/card4.jpg"
            name="Michelle Morgan"
            rating="4.8"
          />
        </div>
      </div>
    </div>
  );
};
