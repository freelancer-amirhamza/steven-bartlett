import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const [open, setOpen] = useState(false)
  // console.log(open)
  return (
    <>
    <div className="container min-w-full  ">
        <div className=" flex w-full h-full items-center py-5 
    justify-between">
        <div 
        onClick={() => setOpen(!open)}
        className="menu-btn lg:hidden w-full flex text-[28px] cursor-pointer hover:text-yellow-400  ">
          <  RxHamburgerMenu />
          </div>
        <div className="logo lg:w-fit w-full justify-end m-0  flex items-center gap-1 uppercase text-[24px] right-0 md:text-right lg:text-left font-bold  ">
            <h2 className="text-white tracking-wide "> STEVEN </h2>
            <span className='text-yellow-400 tracking-wide '> BARTLETT</span>
        </div>
        <div className="hidden lg:block items-center  mx-auto justify-center w-full">
        <div className="menu-bar flex items-center  mx-auto justify-center w-full gap-[20px]   ">
          <a className=' text-md hover:text-yellow-400 uppercase font-semibold' href="/about">About</a>
          <a className=' text-md hover:text-yellow-400 uppercase font-semibold' href="/venture">venture</a>
          <a className=' text-md hover:text-yellow-400 uppercase font-semibold' href="/diary">the diary of a ceo</a>
          <a className=' text-md hover:text-yellow-400 uppercase font-semibold' href="/book">book</a>
          <a className=' text-md hover:text-yellow-400 uppercase font-semibold' href="/news">news</a>
        </div>
        </div>
        <div className="contact hidden lg:block hover:text-yellow-400  items-center text-md uppercase font-semibold">
          <a href="./contact">Contact</a>
        </div>
        </div>
    </div>
    <div className=" w-64 h-screen bg-bg-light absolute top-0 z-10 -ml-64  "
    style={{ marginLeft: open ? '0' :'-256px', transition: 'all 0.4s ease-in-out',
            opacity: open ? '1' : '0.5',
            }} >
      <div
      onClick={() => setOpen(!open)}
      className="btn flex items-center cursor-pointer text-[20px] font-bold hover:text-yellow-400 py-6 px-5 w-full justify-end ">
      <RxCross1 />
      {/* <span>close</span> */}
      </div>
      <ul className='flex w-full h-[80vh] items-start flex-col justify-center
      text-start ml-10 uppercase font-bold text-[17px] gap-8 absolute '>
        <a className='hover:text-yellow-400' href="/">steven bartlett</a>
        <a className='hover:text-yellow-400' href="/about">about</a>
        <a className='hover:text-yellow-400' href="/venture">venture</a>
        <a className='hover:text-yellow-400' href="diary">the diary of a ceo</a>
        <a className='hover:text-yellow-400' href="/book">book</a>
        <a className='hover:text-yellow-400' href="/news">news</a>
        <a className='hover:text-yellow-400' href="/contact">contact</a>
      </ul>
    </div>
    </>
  )
}

export default Navbar