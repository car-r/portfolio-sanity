import React from 'react'
import danville from '../../src/danville.jpg'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { TrendingUpIcon } from '@heroicons/react/outline'
import { ChartPieIcon } from '@heroicons/react/outline'

const Home = () => {
    return (
        <main className="bg-gray-100 min-h-screen">
            <section className='flex flex-col md:flex-row justify-around items-center py-20 md:w-11/12 mb-10'>
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
     
            <secion className='flex flex-col items-center bg-white pt-20'>
                <h3 className='text-5xl text-gray-700 mb-6'>Technologies</h3>
                <h4 className='text-2xl text-gray-700 text-center w-10/12 mb-10 sm:w-8/12'>Focusing on front-end development with a minimalist design that is naturally intuitive</h4>
                <div className='grid grid-cols-1 gap-y-6 gap-x-10 mb-20 sm:grid-cols-2 sm:gap-y-8'>
                    <p className='px-14 py-2 bg-gray-700 text-gray-100 text-center rounded-xl font-bold'>HTML</p>
                    <p className='px-14 py-2 bg-gray-700 text-gray-100 text-center rounded-xl font-bold'>CSS</p>
                    <p className='px-14 py-2 bg-gray-700 text-gray-100 text-center rounded-xl font-bold'>Javascript</p>
                    <p className='px-14 py-2 bg-gray-700 text-gray-100 text-center rounded-xl font-bold'>React</p>
                </div>
            </secion>
            <secion className='flex flex-col items-center pt-20 pb-20'>
                <h3 className='text-5xl text-gray-700 mb-8'>Skills</h3>
                <div className='grid grid-cols-1 gap-y-6 md:gap-x-4 md:grid-cols-3 md:px-6'>
                    <div className='max-w-md bg-white py-5 px-6 rounded-lg shadow-md'>
                        <div className='flex flex-col mb-4'>
                            <BriefcaseIcon className='h-10 w-10 mb-2'/>
                            <h4 className='text-2xl font-semibold mb-2'>Business Development</h4>
                            <p className=''>Spent the last three years as a casualty underwriter, building relationships with the broker community and providing flexible insurance solutions to clients.</p>
                        </div>
                    </div>
                    <div className='max-w-md bg-white py-5 px-6 rounded-lg shadow-md'>
                        <div className='flex flex-col mb-4'>
                            <TrendingUpIcon className='h-10 w-10 mb-2'/>
                            <h4 className='text-2xl font-semibold mb-2'>Data Analysis</h4>
                            <p>Performed analysis on client and industry data to understand past and current trends in order to obtain risk adequate pricing.</p>
                        </div>
                    </div>
                    <div className='max-w-md bg-white py-5 px-6 rounded-lg shadow-md'>
                        <div className='flex flex-col mb-4'>
                            <ChartPieIcon className='h-10 w-10 mb-2'/> 
                            <h4 className='text-2xl font-semibold mb-2'>User Experience</h4>
                            <p>Utilized Power BI to build real-time dashboards for the sales organization and management team to enable portfolio monitoring and portfolio steering.</p>
                        </div>
                    </div>
                
                </div>
                
            </secion>
            
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
