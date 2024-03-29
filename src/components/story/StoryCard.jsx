import React from 'react'

const Story = () => {
  return (
    <>
    <div className="section-story wrapper w-full h-full flex items-center justify-center ">
        <div className="cards grid-flow-row grid gap-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 auto-rows-[400px]  h-full ">
            <div className="card  w-full min-h-[300px] bg-slate-400 ">
                <img className='w-full h-full  object-cover' src="https://stevenbartlett.com/wp-content/uploads/2024/01/Instagram-copy.jpg" alt="" />
                <div className="content "></div>
            </div>
            <div className="card col-span-1  bg-slate-400 ">
                <img className='w-full h-full object-cover ' src="https://stevenbartlett.com/wp-content/uploads/2024/01/Instagram-copy.jpg" alt="" />
                <div className="content "></div>
            </div>
            <div className="card  bg-slate-400 ">
                <img className='w-full h-full object-cover' src="https://stevenbartlett.com/wp-content/uploads/2024/01/Instagram-copy.jpg" alt="" />
                <div className="content "></div>
            </div>
            <div className="card  bg-slate-400 ">
                <img className='w-full h-full object-cover ' src="https://stevenbartlett.com/wp-content/uploads/2024/01/Instagram-copy.jpg" alt="" />
                <div className="content "></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Story