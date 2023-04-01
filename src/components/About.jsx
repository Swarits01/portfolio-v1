import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-start w-full h-full mx-auto px-8'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='text-left pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 px-0'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 '>
                    <div className='text-left text-4xl font-bold '>
                        <p>Hi, I'm Swarit</p>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolor necessitatibus itaque nisi vero esse eaque tempora corrupti quisquam ab?
                    </div>
                </div>
        </div>
       

    </div>
  )
}

export default About