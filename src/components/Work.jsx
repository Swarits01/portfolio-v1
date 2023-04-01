import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-width-[1000px] flex flex-col px-8'>
        <div>

        <h1 className='inline border-b-4 border-pink-600 text-4xl font-bold'>Work</h1>
        <p className='py-6'>This Section will display my projects</p>
        </div>

        {/* Project Container */}
        <div 
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {/* Item */}
            <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-white text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-white text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-white text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Work