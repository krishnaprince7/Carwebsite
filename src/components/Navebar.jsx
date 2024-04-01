import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navebar = () => {
  const [show,setshow] = useState(false)

  function handalbar(){
    setshow(!show)
  }
  return (
    <div className='w-full bg-black text-white flex justify-between items-center p-4 px-4 sm:px-[2cm] '>
    <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'>Car Rendal</h1>
    <div>
        <ul className='hidden gap-8 text-[13px] pt-[2px] cursor-pointer sm:text-[15px] md:text-[16px] sm:flex'>
        
            <li className='hover:border-b'>
        <Link  to="home" spy={true}  smooth={true} offset={0} duration={1200}>HOME</Link>
            </li>
            <li className='hover:border-b'>
        <Link  to="Car" spy={true}  smooth={true} offset={0} duration={1200}>CAR</Link>
            </li>
            <li className='hover:border-b'>
        <Link  to="About" spy={true}  smooth={true} offset={0} duration={1200}>ABOUT</Link>
            </li>
            <li className='hover:border-b'>
        <Link  to="App" spy={true}  smooth={true} offset={0} duration={1200}>BOOKING</Link>
            </li>
            <li className='hover:border-b'>
        <Link  to="Contact" spy={true}  smooth={true} offset={0} duration={1200}>CONTACT</Link>
            </li>
        </ul>
    </div>
    <div className="flex sm:hidden cursor-pointer" onClick={handalbar}>
        {show ? <IoClose size={28}/> :  <RiMenu3Line size={28}/>}
    </div>

      <ul className={show ? 'fixed left-0  top-0 bg-transparent p-4 w-[5cm]  items-center h-screen md:hidden transition ease-in-out duration-300  cursor-pointer ' : "fixed left-[-200%] "}>
      <h1 className='text-xl sm:text-2xl md:text-4xl font-bold pb-4'>Car Rendal</h1>

        <li className='p-3  border-b'>
        <Link onClick={handalbar}  to="home" spy={true}  smooth={true} offset={0} duration={1200}>HOME</Link>

        </li>
        <li  className='p-3 border-b'>
        <Link onClick={handalbar} to="Car" spy={true}  smooth={true} offset={0} duration={2500}>CAR</Link>


        </li>
        <li className='p-3  border-b'>
        <Link onClick={handalbar}  to="About" spy={true}  smooth={true} offset={0} duration={1400}>ABOUT</Link>

        </li>
        <li  className=' p-3 border-b'>
        <Link onClick={handalbar}  to="App" spy={true}  smooth={true} offset={0} duration={2500}>BOOKING</Link>

        </li>
       
        <li  className=' p-3 border-b'>
        <Link onClick={handalbar}  to="Contact" spy={true}  smooth={true} offset={0} duration={3000}>CONTACT</Link>

        </li>
      </ul>
 
    </div>
  )
}

export default Navebar