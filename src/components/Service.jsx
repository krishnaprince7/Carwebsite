import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { GiNotebook } from "react-icons/gi";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  useEffect(() => {
    AOS.init({duration:900});
  }, [])
  return (
    <div className="w-full sm:h-screen h-[150vh] py-16 bg-black" data-aos="zoom-in-up">
      <h1 className="text-white text-center text-4xl font-bold pb-10">
        Why Choose Us
      </h1>
      <div className="max-w-[1240px] h-[70vh] bg-black mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 ">
        <div className="mx-auto py-4 px-4 flex flex-col text-center items-center justify-center bg-[#333333] group  h-[7cm] w-[6cm] rounded-md hover:scale-[1.1] sm:h-[10cm] text-white hover:bg-yellow-400 hover:text-black cursor-pointer transition ease-out duration-500 ">
          <FaCameraRetro size={40} style={{color:"yellow"}}/>
          <p className="py-4  text-xl font-bold  hover:text-black  ">Best Price</p>
          <p className=" font-semibold  hover:text-black ">
           Ford Mustang price starts at Rs. 74.61 Lakh ex-showroom and it comes with 4951cc engine.
          </p>
          <p className="text-yellow-400 font-semibold pt-4  group-hover:text-black " onClick={()=>{
            window.open("https://www.carwale.com/ford-cars/mustang/")
          }}>
           Learn More
          </p>
        </div>
      
        <div className="mx-auto py-4 px-4 flex flex-col text-center items-center justify-center bg-[#333333] group  h-[7cm] w-[6cm] hover:scale-[1.1] rounded-md sm:h-[10cm] text-white hover:bg-yellow-400 hover:text-black cursor-pointer transition ease-out duration-500 ">
          <GiNotebook size={40} style={{color:"yellow"}}/>
          <p className="py-4  text-xl font-bold  hover:text-black  ">Best Mileage</p>
          <p className=" font-semibold  hover:text-black " onClick={()=>{
            window.open("https://www.carandbike.com/ford-cars/mustang/mileage")
          }}>
           More specifically, the 2.3-liter EcoBoost engine can get you up to 21 miles per gallon in the city.
          </p>
          <p className="text-yellow-400 font-semibold pt-4 group-hover:text-black ">
           Learn More
          </p>
        </div>
      
        <div className="mx-auto py-4 px-4 flex flex-col text-center items-center justify-center bg-[#333333] group  h-[7cm] w-[6cm] rounded-md hover:scale-[1.1] sm:h-[10cm] text-white hover:bg-yellow-400 hover:text-black cursor-pointer transition ease-out duration-500 ">
          <SlNote size={40} style={{color:"yellow"}}/>
          <p className="py-4  text-xl font-bold  hover:text-black  ">Top Speed</p>
          <p className=" font-semibold  hover:text-black " onClick={()=>{
            window.open("https://www.carparts.com/blog/how-fast-can-the-ford-mustang-gt-go/#:~:text=According%20to%20Ford%2C%20the%202022,top%20speed%20of%20168%20mph.")
          }}>
    According to Ford, the 2022 Mustang GT's top speed is 163 miles per hour (mph).Ford Mustang is no slouch with a top speed of 155 mph.
          </p>
          <p className="text-yellow-400 font-semibold pt-4  group-hover:text-black ">
           Learn More
          </p>
        </div>
      
      
      </div>
    </div>
  );
};

export default Service;
