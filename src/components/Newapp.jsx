import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Newapp = () => {
  useEffect(() => {
    AOS.init({duration:900});
  }, [])
  return (
    <div className='bg-black h-[70vh] w-full py-10 -z-10'data-aos="fade-down" id='App'>
    <div className='max-w-[1240px]  h-[70vh] relative mx-auto'>
    <img src="/images/pattern.jpeg"  className='object-cover h-[70vh] sm:w-full rounded-md px-2' alt="" />
<div className='text-white absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center'>
<h1 className="sm:text-4xl text-2xl  font-bold py-6 text-black">Get Started with our app</h1>
<p className='text-black px-4 text-center'>Here Is our apps, its also avilabe on Play store and App store go and dounlode now.</p>
<div className='grid grid-cols-2 w-[10cm] sm:w-[15cm] '>
    <img src="images/play_store.png" className='scale-50' alt="" />
    <img src="images/app_store.png" className='scale-50' alt="" />
</div>
</div>
    </div>
    </div>
  )
}

export default Newapp