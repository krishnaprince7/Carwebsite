import React from 'react'
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full bg-[#333333] py-16 mt-20 opacity-100" id='Contact'>
    <div className="max-w-[1240px] mx-auto flex flex-col px-4 ">
      <div className="sm:flex  justify-between">
        <h1 className="md:text-4xl font-bold text-3xl text-center">
          CONTACT.
        </h1>

        <div className="flex justify-between my-4 w-full sm:max-w-[240px] cursor-pointer">

        <a href="https://www.linkedin.com/in/krishna-vishwakarma-485267291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><MdFacebook size={25} className="icon" /></a>
         
          <a href="https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg=="> <FaInstagram size={25} className="icon" /></a>
         
          <a href="https://www.linkedin.com/in/krishna-vishwakarma-485267291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin size={25} className="icon" /></a>
          <a href="https://github.com/krishnaprince7"> <FaGithub size={25} className="icon" /></a>
         
        </div>
      </div>
    <div className="flex justify-between cursor-pointer">
    <ul className=" lg:flex gap-8">
      <li className= " hover:border-b-[3px]  border-black">About</li>
      <li className= " hover:border-b-[3px]  border-black"  >Paternerchips</li>
      <li className= " hover:border-b-[3px]  border-black">Carrers</li>
      <li className= " hover:border-b-[3px]  border-black">Newsroom</li>
      <li className= " hover:border-b-[3px]  border-black">Advertising</li>
    </ul>
    <ul className=" lg:flex gap-8 text-right">

      <li className= " hover:border-b-[3px] border-black">Home</li>
      <li className= " hover:border-b-[3px]  border-black">Destination</li>
      <li className= " hover:border-b-[3px]  border-black">Location</li>
      <li className= " hover:border-b-[3px]  border-black">Modles</li>
      <li className= " hover:border-b-[3px]  border-black">Prices</li>
    </ul>
    </div>
    </div>
   
  </div>
  )
}

export default Contact