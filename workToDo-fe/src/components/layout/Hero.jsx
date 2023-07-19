import React from 'react'

function Hero() {
  return (
    <div className=' overflow-hidden py-24 lg:py-36 md:py-28 relative  flex items-center'>
        <div className=' flex-1 lg:p-16 p-4 -mt-16'>
        <h2 className=' font-bold text-darkBlue text-3xl lg:text-6xl'>Task Mastery Made Easy:<br/>Your Personal Work Organizer.</h2>
        <p className=' mt-8 text-normal-text text-sm lg:text-base w-[90%]'>The website is a comprehensive work organization platform designed to help individuals or teams streamline their tasks and effectively manage their to-do lists. It offers a range of features and tools to optimize productivity and enhance task management.</p>
        </div>
       <div className=' flex-1 relative'>
        
       <img className=' absolute min-w-full min-h-full  left-0 -top-96  max-w-xl' src="/hero.png" alt="" />
       </div>
    </div>
  )
}

export default Hero