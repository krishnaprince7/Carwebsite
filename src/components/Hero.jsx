import React from "react";

const Hero = () => {
  return (
    <div className="bg-black w-full h-[90vh]" id="home">
      <div className="max-w-[1240px] h-[92vh] bg-black mx-auto grid grid-cols-1 place-items-center sm:grid-cols-2">
        <div className="order-2 sm:order-1 pr-32 px-6">
          <h1 className="text-yellow-200  font-bold text-2xl pb-1">
            Effortless
          </h1>
          <h1 className="text-white font-bold text-5xl lg:text-7xl pb-1">
            Car Rental
          </h1>
          <p className="text-white pt-1">
            Come And visit Hear for best cars collections like-Lumbergini, Mustang ,Bugati and Many More.
          </p>
          <button className="bg-yellow-500 mt-3 px-7 py-3 rounded-md font-semibold hover:bg-white">Get Stared</button>
        </div>
        <div className="order-1 sm:order-2">
          <img src="/images/car.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
