import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";




const navLink = [ 
  {
    id:1,
    link: '/about',
    title: 'about'
  },
  {
    id:2,
    link: '/diary',
    title: 'Diary of a ceo podcast'
  },
  {
    id:3,
    link: '/diary',
    title: 'diary of a ceo live'
  },
  {
    id:4,
    link: '/news',
    title: 'news'
  },
  {
    id:5,
    link: '/contact',
    title: 'contact'
  },
]

const venture = [ 
  {
    id:1,
    link: '/dragons',
    title: "Dragons'Den"
  },
  {
    id:2,
    link: '/millionaire',
    title: 'happy sexy millionaire'
  },
  {
    id:3,
    link: '/fight',
    title: 'Fight story'
  },
  {
    id:4,
    link: '/book',
    title: 'thirdweb'
  },
  {
    id:5,
    link: '/diary',
    title: 'the diary'
  },
]


const socialLinks = [ 
  {
    id:1,
    link: '/contact',
    title: "Press & Media"
  },
  {
    id:2,
    link: '/',
    title: 'trams & Conditions'
  },
  {
    id:3,
    link: '/',
    title: 'Privacy Policy'
  },
  {
    id:4,
    link: '/',
    title: 'Cookie Policy'
  },
]


const date = new Date().getFullYear()
console.log(date)
const Footer = () => {
  return (
    <div className="container w-full h-max flex flex-col   bottom-0">
      <div className="wrapper flex flex-col lg:flex-row items-center justify-center w-full ">
        <div className="paragraph text-[22px] font-semibold tracking-wide lg:w-2/5 ">
          <p>Self-awareness is realising that there is no opponent – you’re fighting against yourself.</p>
        </div>
        <div className="cards grid grid-cols-2 items-start w-full justify-center sm:grid-cols-1 gap-6 md:grid-cols-3  lg:grid-cols-3 ">

          <div className="card">
            <ul className="links ">
              <h4 className="title text-md text-text-light font-semibold py-4 ">Find out more</h4>
              {navLink.map(({id, title, link}) => {
                return(
                  <li className='capitalize text-md font-semibold border-b-2 w-max hover:text-yellow-400 '
                    key={id} ><Link href={link} > {title} </Link></li>
                )
              })}
              
            </ul>
          </div>

          <div className="card">
            <ul className="links ">
              <h4 className="title text-md text-text-light font-semibold py-4 ">Venture</h4>
              {venture.map(({id, title, link}) => {
                return(
                  <li className='capitalize text-md font-semibold border-b-2 w-max hover:text-yellow-400 '
                    key={id} ><Link href={link} > {title} </Link></li>
                )
              })}
              
            </ul>
          </div>
          <div className="card">
            <ul className="links ">
              <div className=" flex py-4 gap-5 font-bold text-xl "> 
              <Link href=''> <FaInstagram /> </Link>
              <Link href=''> <FaXTwitter /> </Link>
              <Link href=''> <FaLinkedinIn /> </Link>
              <Link href=''> <FaTiktok /> </Link>
              <Link href=''> <FaYoutube  /> </Link>
              <Link href=''> <BiLogoTelegram />  </Link>
              </div>
              {socialLinks.map(({id, title, link}) => {
                return(
                  <li className='capitalize text-md font-semibold border-b-2
                    border-text-light  w-max text-text-light hover:text-yellow-400 '
                    key={id} ><Link href={link} > {title} </Link></li>
                )
              })}
              
            </ul>
          </div>
        </div>
        
      </div>
      <div className="copyright flex  w-full items-center justify-center py-5 text-text-light ">
          <span> &copy; {date} All rights reserved. & Developed By <a className='font-bold underline hover:text-yellow-400' href="http://amirhamzadev.com" target="_blank" rel="noopener noreferrer">Amir Hamza</a>  </span>
        </div>
    </div>
  )
}

export default Footer