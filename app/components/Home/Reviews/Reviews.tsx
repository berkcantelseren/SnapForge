import { ReviewsCard } from "./ReviewsCard";

export const Reviews = () => {
  return (
    <div
      id="reviews"
      className="pt-16 pb-16 bg-[#f4f4f4]"
      data-aos="zoom-in-right"
    >
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
          <ReviewsCard
            image="/images/card14.png"
            name="Mark Lee"
            rating="4.7"
            desc="As a startup founder, efficiency is everything. SnapForge streamlined
          our processes and saved us countless hours."
          />
        </div>
        <div>
          <ReviewsCard
            image="/images/card11.png"
            name="Zoe Smith"
            rating="4.5"
            desc="Managing social media as a streamer was overwhelming, but SnapForge saves me hours every week!"
          />
        </div>
        <div>
          <ReviewsCard
            image="/images/card12.png"
            name="Jacob Hill"
            rating="4.9"
            desc="Managing a business is easier with SnapForge, freeing us from repetitive work so we can scale faster."
          />
        </div>
        <div>
          <ReviewsCard
            image="/images/card13.png"
            name="Michelle Morgan"
            rating="4.8"
            desc="SnapForge’s automation tools helped our agency improve efficiency and handle more clients with ease."
          />
        </div>
      </div>
    </div>
  );
};
