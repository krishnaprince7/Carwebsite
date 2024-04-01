import React from "react";
import data from "../data.json";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Range = () => {
  useEffect(() => {
    AOS.init({duration:900});
  }, [])
  return (
    <div className="bg-[#333333] sm:h-[110vh] w-full py-6" data-aos="zoom-out-right" id="Car">
      <div className="max-w-[1240px] h-screen bg-[#333333] mx-auto px-4 ">
        <h1 className="text-4xl font-bold py-6 text-white">
          Range And Performace
        </h1>
        <p className="text-white font-semibold">
          Here is the best Milage and Performance will provide in My every
          manfacturing Cars, we Provide test Drives Service.So come and make your ride awsome.
        </p>
      <div className="max-w-[1240px] sm:h-[85vh] bg-[#333333] px-12 mx-auto grid grid-cols-1  justify-center  items-center ">
           {data.map((value)=>{
            return(
                <div className=" h-[9cm] w-[8cm] mx-auto">
                   <img className="hover:scale-[1.2] ease-in-out transition duration-700" src={value.img} alt="" />
                   <p className="text-yellow-400 font-bold">{value.name}</p>
                   <div className="flex justify-between text-yellow-400 underline">

                   <p className="text-white font-bold">{value.price}</p>
                  

                   </div>
          <button className="text-yellow-400 border border-yellow-400 px-6 py-3 rounded-md font-bold hover:bg-yellow-400 mt-6 hover:text-black transition ease-in-out duration-100 " 
          onClick={()=>{
            window.open("https://www.carwale.com/ford-cars/mustang/")
          }}>Get Started</button>
                </div>
            )
           })}
      </div>

      </div>
    </div>
  );
};

export default Range;
