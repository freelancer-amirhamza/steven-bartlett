import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const [open, setOpen] = useState(false)


  const navLink = [ 
    {
      id:1,
      link: '/about',
      title: 'about'
    },
    {
      id:2,
      link: '/venture',
      title: 'venture'
    },
    {
      id:3,
      link: '/diary',
      title: 'the diary of a ceo'
    },
    {
      id:4,
      link: '/book',
      title: 'book'
    },
    {
      id:5,
      link: '/news',
      title: 'news'
    },
  ]
  // console.log(open)
  return (
    <>
      <div className="container min-w-full  ">
        <div
          className=" flex w-full h-full items-center py-5 
    justify-between"
        >
          <div
            onClick={() => setOpen(!open)}
            className="menu-btn lg:hidden w-full flex text-[28px] cursor-pointer hover:text-yellow-400  "
          >
            <RxHamburgerMenu />
          </div>
          <Link href="/">
            <div className="logo lg:w-fit w-full justify-end m-0  flex items-center gap-1 uppercase text-[24px] right-0 md:text-right lg:text-left font-bold  ">
              <h2 className="text-white tracking-wide "> STEVEN </h2>
              <span className="text-yellow-400 tracking-wide "> BARTLETT</span>
            </div>
          </Link>
          <div className="hidden lg:block items-center  mx-auto justify-center w-full">
            <div className="menu-bar flex items-center  mx-auto justify-center w-full gap-[20px]   ">
              {navLink.map(({link, title, id}) =>{
                return(
                  <Link key={id} href={link}>
                    <li className=" text-md hover:text-yellow-400 uppercase list-none font-semibold"> {title} </li>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="contact hidden lg:block hover:text-yellow-400  items-center text-md uppercase font-semibold">
            <a href="./contact">Contact</a>
          </div>
        </div>
      </div>
      <div
        className=" w-64 h-screen bg-bg-light absolute top-0 z-10 -ml-64  "
        style={{
          marginLeft: open ? "0" : "-256px",
          transition: "all 0.4s ease-in-out",
          opacity: open ? "1" : "0.5",
        }}
      >
        <div
          onClick={() => setOpen(!open)}
          className="btn flex items-center cursor-pointer text-[20px] font-bold hover:text-yellow-400 py-6 px-5 w-full justify-end "
        >
          <RxCross1 />
          {/* <span>close</span> */}
        </div>
        <ul
          className="flex w-full h-[80vh] items-start flex-col justify-center
            text-start ml-10 uppercase font-bold text-[17px] gap-8 absolute ">
          <Link href="/" ><li className="text-yellow-400" > steven bartlett </li></Link>

          {navLink.map(({link, title, id}) =>{
                return(
                  <Link key={id} href={link}>
                    <li className=" text-md hover:text-yellow-400 uppercase list-none font-semibold"> {title} </li>
                  </Link>
                )
              })}
          <Link href="/contact" ><li className="text-yellow-400" > contact</li></Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar