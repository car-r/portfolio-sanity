import React from 'react'
import danville from '../../src/danville.jpg'

const Home = () => {
    return (
        <main className="bg-gray-100">
            <section className='flex flex-col md:flex-row justify-around items-center py-20 md:w-11/12'>
                <div className='p-5 md:p-10 pb-10 '>
                    <h1 className='text-6xl md:text-8xl mb-1 ml-4 text-gray-700'>Hi. I'm Carson</h1>
                    <h2 className='text-2xl md:text-3xl ml-4 pb-6 text-gray-700'>Insurance professional and front-end developer</h2>
                    <div className='mb-6 ml-4'>
                        <a href='https://github.com/car-r' rel="noopener noreferrer" target="_blank"> 
                            <button className='px-7 py-2 bg-gray-600 text-gray-100 rounded-xl hover:bg-purple-500 focus:bg-purple-300 tracking-widest mr-8'>GitHub</button>
                        </a>
                        <a href='https://www.linkedin.com/in/carson-richter-42362132' rel="noopener noreferrer" target="_blank"> 
                            <button className='px-7 py-2 bg-gray-600 text-gray-100 rounded-xl hover:bg-purple-500 focus:bg-purple-300 tracking-widest'>LinkedIn</button>
                        </a>
                    </div>
                    
                </div>
                <img src={danville} alt='carson' className='object-cover home-image'/>
            </section>
            
        </main>
        /*
        <main>
            <img src={image} alt="" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 sm:p-10">
                <h1 className="text-8xl text-gray-100 font-bold cursive leading-none lg:leading-snug home-name">Hi. I'm Carson</h1>
                
            </section>
        </main>
        */
    )
}

export default Home
