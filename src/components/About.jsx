import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({duration:700});
  }, [])

  return (
    <div className="w-full h-screen py-6 bg-[#333333]" data-aos="zoom-out-up" id="About">
     
      <div className="max-w-[1240px] h-screen bg-[#333333] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 justify-around items-center ">
        <div>
          <img src="/images/car1.png" className="scale-110 sm:scale-75" alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-bold py-6 text-white">About us</h1>
          <p className="text-white pb-6 font-semibold ">Here is top noch Cars Ablaible in Our Company If you Want to buy a car then you have to visit 
          on my Comapny.</p>
          <p className="text-white pb-6 font-semibold" >Here is top noch Cars Ablaible in Our Company If you Want to buy a car then you have to visit 
          on my Comapny.</p>
          <button className="text-yellow-400 border border-yellow-400 px-6 py-3 rounded-md font-bold hover:bg-yellow-400 hover:text-black transition ease-in-out duration-100 " onClick={()=>{
            window.open("https://www.carwale.com/ford-cars/mustang/")
          }}>Get Started</button>

        </div>
      </div>
    </div>
  );
};

export default About;
