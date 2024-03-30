import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

const story = [
    {
        id:1,
        title1: 'The Business & Life Speaking Tour!',
        title2: 'Get Your Tickets Now!',
        text: " Join Entrepreneur, Investor, No.1 Best Selling Author and Host of Europe’s Biggest Podcast - ‘The Diary Of A CEO”, for an insightful and new international lecture series. ",
        image: 'https://stevenbartlett.com/wp-content/uploads/2024/01/Instagram-copy.jpg',
        link: '/'
    },
    {
        id:2,
        title1: 'The Business & Life Speaking Tour!',
        title2: 'Get Your Tickets Now!',
        text: " Join Entrepreneur, Investor, No.1 Best Selling Author and Host of Europe’s Biggest Podcast - ‘The Diary Of A CEO”, for an insightful and new international lecture series. ",
        image: 'https://stevenbartlett.com/images/news/news1.jpg',
        link: '/'
    },
    {
        id:3,
        title1: 'The Business & Life Speaking Tour!',
        title2: 'Get Your Tickets Now!',
        text: " Join Entrepreneur, Investor, No.1 Best Selling Author and Host of Europe’s Biggest Podcast - ‘The Diary Of A CEO”, for an insightful and new international lecture series. ",
        image: 'https://stevenbartlett.com/images/news/news2.jpg',
        link: '/'
    },
    {
        id:4,
        title1: 'The Business & Life Speaking Tour!',
        title2: 'Get Your Tickets Now!',
        text: " Join Entrepreneur, Investor, No.1 Best Selling Author and Host of Europe’s Biggest Podcast - ‘The Diary Of A CEO”, for an insightful and new international lecture series. ",
        image: 'https://stevenbartlett.com/images/news/news3.jpg',
        link: '/'
    },
    {
        id:5,
        title1: 'The Business & Life Speaking Tour!',
        title2: 'Get Your Tickets Now!',
        text: " Join Entrepreneur, Investor, No.1 Best Selling Author and Host of Europe’s Biggest Podcast - ‘The Diary Of A CEO”, for an insightful and new international lecture series. ",
        image: 'https://stevenbartlett.com/images/news/news4.jpg',
        link: '/'
    },
    {
        id:6,
        title1: 'The Business & Life Speaking Tour!',
        title2: 'Get Your Tickets Now!',
        text: " Join Entrepreneur, Investor, No.1 Best Selling Author and Host of Europe’s Biggest Podcast - ‘The Diary Of A CEO”, for an insightful and new international lecture series. ",
        image: 'https://stevenbartlett.com/images/news/news5.jpg',
        link: '/'
    },
    {
        id:7,
        title1: 'The Business & Life Speaking Tour!',
        title2: 'Get Your Tickets Now!',
        text: " Join Entrepreneur, Investor, No.1 Best Selling Author and Host of Europe’s Biggest Podcast - ‘The Diary Of A CEO”, for an insightful and new international lecture series. ",
        image: 'https://stevenbartlett.com/images/news/news6.jpg',
        link: '/'
    },
    {
        id:8,
        title1: 'The Business & Life Speaking Tour!',
        title2: 'Get Your Tickets Now!',
        text: " Join Entrepreneur, Investor, No.1 Best Selling Author and Host of Europe’s Biggest Podcast - ‘The Diary Of A CEO”, for an insightful and new international lecture series. ",
        image: 'https://stevenbartlett.com/images/ventures/flight-fund/until-bg.jpg',
        link: '/'
    },
]

const Story = () => {
  return (
    <>
    <div className="section-story wrapper mx-auto w-full h-full items-center grid-flow-dense justify-center ">
        <div className="cards grid lg:grid-cols-4 gap-3 md:gap-0 md:grid-cols-2  auto-rows-[300px] grid-cols-1 md:px-0 px-5   ">
            {story.map(({title1,title2, id, image,link,text }) => {
                return(
                    <div key={id} className="card  w-full h-full max-h-[300px] relative flex items-center justify-center text-start ">
                    <img className='w-full h-full   object-cover flex ' src={image} alt="" />
                    <div className="text flex items-center w-full h-full lg:px-2 px-10 absolute top-[230px] z-10">
                    <h4 className="short-title sm:w-full h-full  text-2xl font-semibold  ">{title1}</h4>
                    </div>
                    <div className="content hidden  absolute z-20 bg-[#BF9D1B] text-[#fefce7] h-full w-full opacity-90 p-3  flex-col justify-end gap-2 ">
                        <h2 className="text-2xl text-white font-bold"> {title2} </h2>
                        <p>{text} </p>
    
                            <Link className='flex gap-x-1 items-center w-full h-max ' href={link}>
                                <h2 className=' text-lg mb-1'>Read More </h2>
                                <FaAngleRight />
                            </Link>
                    </div>
                </div>
                )
            })}
        
        </div>
    </div>
    </>
  )
}

export default Story