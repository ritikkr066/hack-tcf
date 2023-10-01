import React from "react";
import Cube2 from "./Cube2";

const BestExp = () => {
  return (
    <>
      <div className="flex h-full w-full py-8 md:px-12 px-4 text-white flex-col-reverse md:flex-row   bg-purple-950">
        <div className="md:w-2/3 w-full flex flex-col justify-center items-center">
          <div className="text-2xl font-semibold">
            Experience the Best of Corona{" "}
          </div>
          <div className="mb-6 text-2xl font-semibold">and Melange</div>

          <div>
            During the fest, we provide a wide range of facilities and services
            to ensure an unforgettable experience for all participants. From
            state-of-the-art venues to top-notch accomodations, we have
            everything you need to make the most of your time at Corona and
            Melange.
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <div className="flex justify-center items-center ">
            <img src="/TCFlogo.png" width={200} height={200} alt="img" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3  sm:grid-cols-2 h-full w-full py-4 md:px-12 px-4 text-white bg-purple-950">
        <Cube2
          name="Top-Notch Venues and
Facilities"
          disp="Our fest offers world class venues equipped with the
latest technology and amenities to host a variety of
events and activities"
        />
        <Cube2
          name="Comfortable
Accommodations"
          disp="We provide comfortable accommodations for
participants, ensuring a pleasant stay throughout the
fest."
        />

        <Cube2
          name="Delicious Food and
Refreshments"
          disp="Enjoy a wide range of delicious food and refreshing
beverages from our careful curated menu."
        />
      </div>
    </>
  );
};

export default BestExp;
